const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { courseService } = require('../services');

const createCourse = catchAsync(async (req, res) => {
  const course = await courseService.createCourse(req.body);
  res.status(httpStatus.CREATED).send(course);
});

const getCourses = catchAsync(async (req, res) => {
  const { type } = req.query;
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  let result;

  switch (type) {
    case 1:
      result = courseService.queryMostViewCourses();
      break;
    case 2:
      result = courseService.queryLatestCourses();
      break;
    case 3:
      result = courseService.queryHighlightCourses();
      break;

    default:
      result = courseService.queryCourses(filter, options);
      break;
  }

  res.send(result);
});

const getCourse = catchAsync(async (req, res) => {
  const course = await courseService.getCourseById(req.params.courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  res.send(course);
});

const getCourseComment = catchAsync(async (req, res) => {
  const course = await courseService.getCourseCommentById(req.params.courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  res.send(course);
});

const getCourseSection = catchAsync(async (req, res) => {
  const course = await courseService.getCourseSectionById(req.params.courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  res.send(course);
});

const getCourseSimilar = catchAsync(async (req, res) => {
  const course = await courseService.getCourseSimilarById(req.params.courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  res.send(course);
});

const updateCourse = catchAsync(async (req, res) => {
  const course = await courseService.updateCourseById(req.params.courseId, req.body);
  res.send(course);
});

const deleteCourse = catchAsync(async (req, res) => {
  await courseService.deleteCourseById(req.params.courseId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  getCourseComment,
  getCourseSection,
  getCourseSimilar,
  updateCourse,
  deleteCourse,
};
