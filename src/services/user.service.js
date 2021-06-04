const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');
const { getCourseById, getCourseSectionById } = require('./course.service');
const { getSubCategoryByCourseId } = require('./sub-category.service');
const { createHistories } = require('./history.service');
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

  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
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
const updateFavoriteCourses = async (user, course) => {
  const { _id: courseId } = course;

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
/* eslint no-param-reassign: "error" */
const updateSubscribedCourses = async (user, course) => {
  const { _id: courseId } = course;
  const { _id: userId } = user;

  const subCategory = await getSubCategoryByCourseId(courseId);
  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sub category not found');
  }

  const idx = user.courses.findIndex((e) => e.toString() === courseId.toString());

  if (idx !== -1) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Course already exist in subscribed courses');
  }

  const { sections } = await getCourseSectionById(courseId);
  const histories = [];

  sections.forEach((section) => {
    const { _id: sectionId, lectures } = section;

    lectures.forEach((lecture) => {
      const { _id: lectureId, name, url, lengthTime, type, order } = lecture;
      const history = {
        name,
        url,
        lengthTime,
        atTime: 0,
        type,
        status: 0,
        course: courseId,
        section: sectionId,
        lecture: lectureId,
        order,
      };

      histories.push(history);
    });
  });

  const historyIds = await createHistories(histories);
  // update new lectures into user history
  user.histories = [...user.histories, ...historyIds];

  // update new course into user courses
  user.courses.push(courseId);
  await user.save();

  // update new student in course students
  course.students.push(userId);
  await course.save();

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
  getUserById,
  getHistories,
  getUserByEmail,
  updateUserById,
  updateFavoriteCourses,
  updateSubscribedCourses,
  deleteUserById,
};
