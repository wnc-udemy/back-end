const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { courseService, subCategoryService } = require('../services');

const createCourse = catchAsync(async (req, res) => {
  const { user } = req;
  const { subCategory: subCategoryId, ...courseBody } = req.body;
  const { _id: instructor } = user;

  const subCategory = await subCategoryService.getSubCategoryById(subCategoryId);
  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sub category not found');
  }

  const course = await courseService.createCourse({ ...courseBody, instructor });

  if (!course) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Create new course fail');
  }

  subCategory.courses.push(course._id);
  await subCategory.save();

  res.status(httpStatus.CREATED).send(course);
});

const getCourses = catchAsync(async (req, res) => {
  const { type } = req.query;
  let filter;
  let options;
  let result;

  switch (type) {
    case 1:
      options = pick(req.query, ['limit', 'page']);
      result = await courseService.queryMostViewCourses(options);
      break;
    case 2:
      options = pick(req.query, ['limit', 'page']);
      result = await courseService.queryLatestCourses(options);
      break;
    case 3:
      options = pick(req.query, ['limit', 'page']);
      result = await courseService.queryHighlightCourses(options);
      break;
    case 4:
      filter = pick(req.query, ['name', 'category', 'subCategory']);
      options = pick(req.query, ['sortBy', 'limit', 'page']);
      result = await courseService.queryAdvanceFilterCourses(filter, options);
      break;

    case 5:
      // eslint-disable-next-line no-case-declarations
      const { user } = req;
      // eslint-disable-next-line no-case-declarations
      const { role: useRole } = user;

      if (useRole !== 'admin') {
        throw new ApiError(httpStatus.FORBIDDEN, 'forbidden');
      }
      filter = pick(req.query, ['status']);
      options = pick(req.query, ['sortBy', 'limit', 'page']);
      result = await courseService.queryAdminCensorshipCourses(filter, options);
      break;

    default:
      filter = pick(req.query, ['name', 'role']);
      options = pick(req.query, ['sortBy', 'limit', 'page']);
      result = await courseService.queryCourses(filter, options);
      break;
  }

  res.send(result);
});

const getCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { type } = req.query;
  const { isLogin } = req;
  const { user } = req;

  let result;

  const course = await courseService.getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  if (isLogin) {
    const { role: userRole, _id: userAuthId } = user;
    if (
      (course.instructor.toString() !== userAuthId.toString() && type === 4) ||
      (course.instructor.toString() !== userAuthId.toString() && type === 5)
    ) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
    }

    if ((userRole === 'user' && type === 4) || (userRole === 'user' && type === 5)) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
    }
  } else if (type === 4 || type === 5) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }

  switch (type) {
    // comments of course
    case 1:
      result = await courseService.getCourseCommentById(courseId, [2]);
      break;
    // sections of course
    case 2:
      result = await courseService.getCourseSectionById(courseId, [2]);
      break;
    // similar course
    case 3:
      result = await courseService.getCourseSimilarById(courseId, [2]);
      break;
    // instructor course detail
    case 4:
      result = await courseService.getCourseDetailById(courseId, [0, 1, 2, 3]);
      break;
    // instructor section
    case 5:
      result = await courseService.getCourseSectionById(courseId, [0, 1, 2, 3]);
      break;
    // default
    case 8:
      result = course;
      break;

    // default detail
    default:
      result = await courseService.getCourseDetailById(courseId, [2]);
      break;
  }

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  if (isLogin && type === 0) {
    const { _id: userAuthId } = user;

    const idxViewer = course.viewers.findIndex((e) => e.toString() === userAuthId.toString());

    if (idxViewer === -1) {
      course.viewers.push(userAuthId);
      await course.save();
    }

    const { favoriteCourses, courses } = user;

    const idxFavorite = favoriteCourses.findIndex((e) => e.toString() === courseId.toString());

    if (idxFavorite !== -1) {
      result.isFavorite = true;
    } else {
      result.isFavorite = false;
    }

    const idxSubscribed = courses.findIndex((e) => e.toString() === courseId.toString());

    if (idxSubscribed !== -1) {
      result.isAllowComment = true;
    } else {
      result.isAllowComment = false;
    }
  }

  res.send(result);
});

const updateCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { user } = req;

  let course;

  course = await courseService.getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  if (user.role !== 'admin' && course.instructor.toString() !== user._id.toString()) {
    throw new ApiError(httpStatus.FORBIDDEN, 'This course was not created by this user');
  }

  course = await courseService.updateCourseById(course, { ...req.body, updatedAt: Date.now() });
  res.send(course);
});

const deleteCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { user } = req;

  const course = await courseService.getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  if (user.role !== 'admin' && course.instructor.toString() !== user._id.toString()) {
    throw new ApiError(httpStatus.FORBIDDEN, 'This course was not created by this user');
  }

  await courseService.deleteCourseById(courseId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
};
