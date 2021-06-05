const httpStatus = require('http-status');
const moment = require('moment');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { sectionService, courseService } = require('../services');

const createSection = catchAsync(async (req, res) => {
  const { course: courseId, ...sectionBody } = req.body;
  const { user } = req;
  const { _id: userId } = user;

  const course = await courseService.getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  if (userId.toString() !== course.instructor.toString()) {
    throw new ApiError(httpStatus.FORBIDDEN, 'This course was not created by this user');
  }

  const order = moment().unix();
  const section = await sectionService.createSection({ ...sectionBody, order, totalTime: 0 });

  if (!section) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Create new section fail');
  }

  course.sections.push(section._id);
  course.updatedAt = Date.now();
  await course.save();

  res.status(httpStatus.CREATED).send(section);
});

const getSections = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await sectionService.querySections(filter, options);
  res.send(result);
});

const getSection = catchAsync(async (req, res) => {
  const section = await sectionService.getSectionById(req.params.sectionId);
  if (!section) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section not found');
  }
  res.send(section);
});

const updateSection = catchAsync(async (req, res) => {
  const { course: courseId, ...sectionBody } = req.body;
  const { user } = req;
  const { sectionId } = req.params;
  const { _id: userId } = user;
  let section;

  const course = await courseService.getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  section = await sectionService.getSectionById(sectionId);
  if (!section) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section not found');
  }

  if (!course.sections.includes(section._id)) {
    throw new ApiError(httpStatus.FORBIDDEN, 'This course was not includes section');
  }

  if (userId.toString() !== course.instructor.toString()) {
    throw new ApiError(httpStatus.FORBIDDEN, 'This course was not created by this user');
  }

  section = await sectionService.updateSectionById(section, sectionBody);
  if (!section) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Update section fail');
  }

  course.updatedAt = Date.now();
  await course.save();

  res.send(section);
});

const deleteSection = catchAsync(async (req, res) => {
  const { sectionId } = req.params;
  const { course: courseId } = req.query;
  const { user } = req;
  const { _id: userId } = user;
  let section;

  const course = await courseService.getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  section = await sectionService.getSectionById(sectionId);
  if (!section) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section not found');
  }

  if (!course.sections.includes(section._id)) {
    throw new ApiError(httpStatus.FORBIDDEN, 'This course was not includes section');
  }

  if (userId.toString() !== course.instructor.toString()) {
    throw new ApiError(httpStatus.FORBIDDEN, 'This course was not created by this user');
  }

  section = await sectionService.deleteSectionById(sectionId);

  if (!section) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Delete section fail');
  }

  const totalLecture = section.lectures.length;
  const idxList = [];
  course.introLectures.forEach((e, index) => {
    if (section.lectures.includes(e)) {
      idxList.push(index);
    }
  });

  for (let i = idxList.length - 1; i >= 0; i -= 1) {
    course.introLectures.splice(idxList[i], 1);
  }

  course.totalTime -= section.totalTime;
  course.totalLecture -= totalLecture;

  const idx = course.sections.findIndex((e) => e.toString() === section._id.toString());
  if (idx !== -1) {
    course.sections.splice(idx, 1);
  }

  course.updatedAt = Date.now();
  await course.save();

  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection,
  getSections,
  getSection,
  updateSection,
  deleteSection,
};
