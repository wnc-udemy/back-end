const httpStatus = require('http-status');
const moment = require('moment');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { lectureService, sectionService, courseService } = require('../services');

const createLecture = catchAsync(async (req, res) => {
  const { course: courseId, section: sectionId, ...lectureBody } = req.body;
  const { user } = req;
  const { _id: userId } = user;

  const course = await courseService.getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  const section = await sectionService.getSectionById(sectionId);
  if (!section) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section not found');
  }

  if (!course.sections.includes(section._id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'This course was not included section');
  }

  if (userId.toString() !== course.instructor.toString()) {
    throw new ApiError(httpStatus.FORBIDDEN, 'This course was not created by this user');
  }

  const order = moment().unix();

  const lecture = await lectureService.createLecture({ ...lectureBody, order });

  if (!lecture) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Create new lecture fail');
  }

  section.lectures.push(lecture._id);
  section.totalTime += lecture.lengthTime;
  await section.save();

  if (lecture.isPreview === true) {
    course.introLectures.push(lecture._id);
  }
  course.totalTime += lecture.lengthTime;
  course.updatedAt = Date.now();
  course.totalLecture += 1;
  await course.save();

  res.status(httpStatus.CREATED).send(lecture);
});

const getLectures = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await lectureService.queryLectures(filter, options);
  res.send(result);
});

const getLecture = catchAsync(async (req, res) => {
  const lecture = await lectureService.getLectureById(req.params.lectureId);
  if (!lecture) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lecture not found');
  }
  res.send(lecture);
});

const updateLecture = catchAsync(async (req, res) => {
  const { course: courseId, section: sectionId, lengthTimeOld, ...lectureBody } = req.body;
  const { user } = req;
  const { lectureId } = req.params;
  const { _id: userId } = user;
  let lecture;

  const course = await courseService.getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  const section = await sectionService.getSectionById(sectionId);
  if (!section) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section not found');
  }

  lecture = await lectureService.getLectureById(lectureId);
  if (!lecture) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lecture not found');
  }

  if (!course.sections.includes(section._id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'This course was not includes section');
  }

  if (!section.lectures.includes(lecture._id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'This section was not includes lecture');
  }

  if (userId.toString() !== course.instructor.toString()) {
    throw new ApiError(httpStatus.FORBIDDEN, 'This course was not created by this user');
  }

  lecture = await lectureService.updateLectureById(lecture, lectureBody);

  if (!lecture) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Update lecture fail');
  }

  if (lengthTimeOld !== undefined) {
    section.totalTime -= lengthTimeOld;
    section.totalTime += lecture.lengthTime;

    await section.save();

    course.totalTime -= lengthTimeOld;
    course.totalTime += lecture.lengthTime;
  }

  const idx = course.introLectures.findIndex((e) => e.toString() === lecture._id.toString());
  if (lecture.isPreview === true) {
    if (idx === -1) {
      course.introLectures.push(lecture._id);
    }
  } else if (idx !== -1) {
    course.introLectures.splice(idx, 1);
  }
  course.updatedAt = Date.now();
  await course.save();

  res.send(lecture);
});

const deleteLecture = catchAsync(async (req, res) => {
  const { lectureId } = req.params;
  const { user } = req;
  const { course: courseId, section: sectionId } = req.query;
  const { _id: userId } = user;
  let lecture;

  const course = await courseService.getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  const section = await sectionService.getSectionById(sectionId);
  if (!section) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section not found');
  }

  lecture = await lectureService.getLectureById(lectureId);
  if (!lecture) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lecture not found');
  }

  if (!course.sections.includes(section._id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'This course was not includes section');
  }

  if (!section.lectures.includes(lecture._id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'This section was not includes lecture');
  }

  if (userId.toString() !== course.instructor.toString()) {
    throw new ApiError(httpStatus.FORBIDDEN, 'This course was not created by this user');
  }

  lecture = await lectureService.deleteLectureById(lectureId);

  if (!lecture) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Delete lecture fail');
  }

  const idxSection = section.lectures.findIndex((e) => e.toString() === lecture._id.toString());
  section.lectures.splice(idxSection, 1);
  section.totalTime -= lecture.lengthTime;
  await section.save();

  if (lecture.isPreview === true) {
    const idx = course.introLectures.findIndex((e) => e.toString() === lecture._id.toString());
    if (idx !== -1) {
      course.introLectures.splice(idx, 1);
    }
  }
  course.totalTime -= lecture.lengthTime;
  course.totalLecture -= 1;
  course.updatedAt = Date.now();
  await course.save();

  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLecture,
  getLectures,
  getLecture,
  updateLecture,
  deleteLecture,
};
