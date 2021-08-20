const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService, courseService } = require('../services');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role', 'status']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(filter, options);

  res.send(result);
});

const getCourses = catchAsync(async (req, res) => {
  const { user } = req;
  const { userId } = req.params;
  const { type, status } = req.query;
  const { role: userRole } = user;
  let { limit, page } = req.query;
  let result;

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (userRole === 'user' && type === 2) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }

  limit = limit && parseInt(limit, 10) > 0 ? parseInt(limit, 10) : 10;
  page = page && parseInt(page, 10) > 0 ? parseInt(page, 10) : 1;
  const skip = (page - 1) * limit;

  // subscribed
  if (type === 0) {
    result = await courseService.querySubscribedCourses(userId, { limit, skip });
  }
  // favorite
  else if (type === 1) {
    result = await courseService.queryFavoriteCourses(userId, { limit, skip });
  }
  // your created
  else {
    result = await courseService.queryYourCreatedCourses({ id: userId, status }, { limit, skip });
  }

  const { courses, total: totalResults } = result;
  const totalPages = Math.ceil(totalResults / limit);

  result = { courses, page, limit, totalPages, totalResults };

  res.send(result);
});

const getHistories = catchAsync(async (req, res) => {
  const result = await userService.getHistories(req.params.userId, req.params.courseId);
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateCourses = catchAsync(async (req, res) => {
  const { type } = req.query;
  const { userId, courseId } = req.params;
  const { user: userAuth } = req;
  let result;

  const user = await userService.getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const course = await courseService.getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  if (userAuth._id.toString() !== user._id.toString()) {
    throw new ApiError(httpStatus.FORBIDDEN, 'User token incorrect with params user');
  }

  // favorite
  if (type === 1) {
    result = await userService.updateFavoriteCourses(user, course);
  }
  // subscribed
  else {
    result = await userService.updateSubscribedCourses(user, course);
  }
  res.send(result);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUser,
  getUsers,
  getCourses,
  getHistories,
  getUser,
  updateUser,
  updateCourses,
  deleteUser,
};
