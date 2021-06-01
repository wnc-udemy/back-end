const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');
const { getCourseById, getCourseSectionById } = require('./course.service');
const { getSubCategoryByCourseId } = require('./sub-category.service');
const { createMultiHistory } = require('./history.service');
const { getHistoriesByCourseId } = require('./history.service');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  const user = await User.create(userBody);
  return user;
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Query for subscribed courses of user
 * @returns {Promise<QueryResult>}
 */
const querySubscribedCourses = async (id, pagination) => {
  const { limit, skip } = pagination;
  return User.aggregate([
    {
      $match: {
        _id: id,
      },
    },
    {
      $project: {
        _id: 1,
        courses: 1,
        total: { $size: '$courses' },
      },
    },
    {
      $lookup: {
        from: 'course',
        localField: 'courses',
        foreignField: '_id',
        as: 'courses',
      },
    },
    {
      $unwind: {
        path: '$courses',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'user',
        localField: 'courses.instructor',
        foreignField: '_id',
        as: 'courses.instructor',
      },
    },
    {
      $project: {
        'courses._id': '$courses._id',
        'courses.name': '$courses.name',
        'courses.targets': '$courses.targets',
        'courses.introDescription': { $trim: { input: '$courses.introDescription' } },
        'courses.instructorName': '$courses.instructor.name',
        'courses.averageRating': '$courses.averageRating',
        'courses.totalTime': '$courses.totalTime',
        'courses.totalLecture': '$courses.totalLecture',
        'courses.urlThumb': '$courses.urlThumb',
        'courses.createdAt': '$courses.createdAt',
        'courses.totalComment': { $size: '$courses.comments' },
        'courses.totalViewer': { $size: '$courses.viewers' },
        total: 1,
      },
    },
    {
      $unwind: '$courses.instructorName',
    },
    { $limit: limit },
    { $skip: skip },
    {
      $group: {
        _id: '$_id',
        courses: { $push: '$courses' },
        total: { $first: '$total' },
      },
    },
  ]);
};

/**
 * Query for favorite courses of user
 * @returns {Promise<QueryResult>}
 */
const queryFavoriteCourses = async (id, pagination) => {
  const { limit, skip } = pagination;
  return User.aggregate([
    {
      $match: {
        _id: id,
      },
    },
    {
      $project: {
        _id: 0,
        courses: '$favoriteCourses',
        total: { $size: '$favoriteCourses' },
      },
    },
    {
      $lookup: {
        from: 'course',
        localField: 'courses',
        foreignField: '_id',
        as: 'courses',
      },
    },
    {
      $unwind: {
        path: '$courses',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'user',
        localField: 'courses.instructor',
        foreignField: '_id',
        as: 'courses.instructor',
      },
    },
    {
      $project: {
        'courses._id': '$courses._id',
        'courses.name': '$courses.name',
        'courses.targets': '$courses.targets',
        'courses.introDescription': { $trim: { input: '$courses.introDescription' } },
        'courses.instructorName': '$courses.instructor.name',
        'courses.averageRating': '$courses.averageRating',
        'courses.totalTime': '$courses.totalTime',
        'courses.totalLecture': '$courses.totalLecture',
        'courses.urlThumb': '$courses.urlThumb',
        'courses.createdAt': '$courses.createdAt',
        'courses.totalComment': { $size: '$courses.comments' },
        'courses.totalViewer': { $size: '$courses.viewers' },
        total: 1,
      },
    },
    {
      $unwind: '$courses.instructorName',
    },
    { $limit: limit },
    { $skip: skip },
    {
      $group: {
        _id: '$_id',
        courses: { $push: '$courses' },
        total: { $first: '$total' },
      },
    },
  ]);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCourses = async (id, filter, options) => {
  const userID = new mongoose.Types.ObjectId(id);
  const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
  const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
  const skip = (page - 1) * limit;

  let result;

  // subscribed
  if (filter.type === 0) {
    result = await querySubscribedCourses(userID, { limit, skip });
  }
  // favorite
  else {
    result = await queryFavoriteCourses(userID, { limit, skip });
  }

  const { courses, total: totalResults } = result[0];
  const totalPages = Math.ceil(totalResults / limit);

  return { courses, page, limit, totalPages, totalResults };
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Get histories by user id and course id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getHistories = async (userId, courseId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const idx = user.courses.findIndex((e) => e.toString() === courseId);

  if (idx === -1) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User was not registered this course');
  }

  return getHistoriesByCourseId(courseId);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Add favorite course by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const updateFavoriteCourses = async (userId, courseId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  const idx = user.favoriteCourses.findIndex((e) => e.toString() === courseId);

  if (idx !== -1) {
    user.favoriteCourses.splice(idx, 1);
  } else {
    user.favoriteCourses.push(courseId);
  }

  await user.save();
  return true;
};

/**
 * Add subscribed course by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const updateSubscribedCourses = async (userId, courseId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  const subCategory = await getSubCategoryByCourseId(courseId);
  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sub category not found');
  }

  const idx = user.courses.findIndex((e) => e.toString() === courseId);

  if (idx !== -1) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Course already exist in subscribed courses');
  }

  const { sections } = await getCourseSectionById(courseId);
  const histories = [];

  sections.forEach((section) => {
    const { _id: sectionId, lectures } = section;

    lectures.forEach((lecture) => {
      const { name, url, lengthTime, type } = lecture;
      const history = {
        name,
        url,
        lengthTime,
        type,
        course: courseId,
        section: sectionId,
        atTime: 0,
        status: 0,
      };

      histories.push(history);
    });
  });

  const historyIds = await createMultiHistory(histories);
  // update new lectures into user history
  user.histories = [...user.histories, ...historyIds];

  // update new course into user courses
  user.courses.push(courseId);
  await user.save();

  // update quantity course in sub category  into sub category course
  subCategory.totalRegister[0] += 1;
  await subCategory.save();

  return true;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createUser,
  queryUsers,
  queryCourses,
  getUserById,
  getCourseById,
  getHistories,
  updateFavoriteCourses,
  updateSubscribedCourses,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};
