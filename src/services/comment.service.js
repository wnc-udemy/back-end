const httpStatus = require('http-status');
const { Comment } = require('../models');
const { getUserById } = require('./user.service');
const { getCourseById } = require('./course.service');
const ApiError = require('../utils/ApiError');

/**
 * Create a comment
 * @param {Object} commentBody
 * @returns {Promise<Comment>}
 */
const createComment = async (commentBody) => {
  const { user: userId, course: courseId } = commentBody;

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

  const comment = await Comment.create(commentBody);
  if (!comment) {
    throw new ApiError(httpStatus.exports, 'Create comment fail');
  }

  // Update course info after create new comment
  const { _id: commentId, rating } = comment;
  const { averageRating } = course;

  if (averageRating === 0.0 || averageRating === 0) {
    course.averageRating = rating;
  } else {
    course.averageRating = ((rating + averageRating) / 2).toFixed(2);
  }
  course.comments.push(commentId);

  await course.save();

  return comment;
};

/**
 * Query for comments
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryComments = async (filter, options) => {
  const comments = await Comment.paginate(filter, options);
  return comments;
};

/**
 * Get comment by id
 * @param {ObjectId} id
 * @returns {Promise<Comment>}
 */
const getCommentById = async (id) => {
  return Comment.findById(id);
};

/**
 * Update comment by id
 * @param {ObjectId} commentId
 * @param {Object} updateBody
 * @returns {Promise<Category>}
 */
const updateCommentById = async (commentId, updateBody) => {
  const comment = await getCommentById(commentId);
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }
  Object.assign(comment, updateBody);
  await comment.save();
  return comment;
};

/**
 * Delete comment by id
 * @param {ObjectId} commentId
 * @returns {Promise<Comment>}
 */
const deleteCommentById = async (commentId) => {
  const comment = await getCommentById(commentId);
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }
  await comment.remove();
  return comment;
};

module.exports = {
  createComment,
  queryComments,
  getCommentById,
  updateCommentById,
  deleteCommentById,
};
