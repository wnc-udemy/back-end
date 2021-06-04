const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { commentService, courseService } = require('../services');

const createComment = catchAsync(async (req, res) => {
  const { course: courseId, ...commentBody } = req.body;
  const { user } = req;
  const { _id: userId } = user;

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const course = await courseService.getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  const idx = user.courses.findIndex((e) => e.toString() === courseId);

  if (idx === -1) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User was not registered this course');
  }

  const comment = await commentService.createComment({ ...commentBody, user: userId }, course);
  res.status(httpStatus.CREATED).send(comment);
});

const getComments = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await commentService.queryCategories(filter, options);
  res.send(result);
});

const getComment = catchAsync(async (req, res) => {
  const comment = await commentService.getCommentById(req.params.commentId);
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }
  res.send(comment);
});

const updateComment = catchAsync(async (req, res) => {
  const comment = await commentService.updateCommentById(req.params.commentId, req.body);
  res.send(comment);
});

const deleteComment = catchAsync(async (req, res) => {
  await commentService.deleteCommentById(req.params.commentId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
};
