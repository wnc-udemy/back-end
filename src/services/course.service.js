const httpStatus = require('http-status');
const moment = require('moment');
const mongoose = require('mongoose');
const { Course, SubCategory } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a course
 * @param {Object} courseBody
 * @returns {Promise<Course>}
 */
const createCourse = async (courseBody) => {
  const course = await Course.create(courseBody);
  return course;
};

/**
 * Query for courses
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCourses = async (filter, options) => {
  const courses = await Course.paginate(filter, options);
  return courses;
};

/**
 * Query for most view courses
 * @returns {Promise<QueryResult>}
 */
const queryMostViewCourses = async () => {
  const courses = await Course.aggregate([
    {
      $project: {
        name: 1,
        introDescription: { $trim: { input: '$introDescription' } },
        instructor: 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        urlThumb: 1,
        totalComment: {
          $size: '$comments',
        },
        totalViewer: {
          $size: '$viewers',
        },
      },
    },
    { $sort: { totalViewer: -1 } },
    { $limit: 10 },
    {
      $lookup: {
        from: 'user',
        localField: 'instructor',
        foreignField: '_id',
        as: 'instructor',
      },
    },
    {
      $addFields: {
        instructorName: '$instructor.name',
      },
    },
    {
      $project: {
        instructor: 0,
      },
    },
    {
      $unwind: '$instructorName',
    },
  ]);
  return courses;
};

/**
 * Query for latest courses
 * @returns {Promise<QueryResult>}
 */
const queryLatestCourses = async () => {
  const courses = await Course.aggregate([
    {
      $project: {
        name: 1,
        introDescription: { $trim: { input: '$introDescription' } },
        instructor: 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        urlThumb: 1,
        totalComment: {
          $size: '$comments',
        },
        createdAt: 1,
      },
    },
    { $sort: { createdAt: -1 } },
    { $limit: 10 },
    {
      $lookup: {
        from: 'user',
        localField: 'instructor',
        foreignField: '_id',
        as: 'instructor',
      },
    },
    {
      $addFields: {
        instructorName: '$instructor.name',
      },
    },
    {
      $project: {
        instructor: 0,
      },
    },
    {
      $unwind: '$instructorName',
    },
  ]);
  return courses;
};

/**
 * Query for highlight courses
 * @returns {Promise<QueryResult>}
 */
const queryHighlightCourses = async () => {
  const start = moment().subtract(7, 'days').toDate().toISOString();

  const courses = await Course.aggregate([
    {
      $match: {
        createdAt: {
          $gte: start,
        },
      },
    },
    {
      $project: {
        name: 1,
        introDescription: { $trim: { input: '$introDescription' } },
        instructor: 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        urlThumb: 1,
        createdAt: 1,
        totalComment: {
          $size: '$comments',
        },
        totalViewer: {
          $size: '$viewers',
        },
      },
    },
    { $sort: { totalViewer: -1 } },
    { $limit: 10 },
    {
      $lookup: {
        from: 'user',
        localField: 'instructor',
        foreignField: '_id',
        as: 'instructor',
      },
    },
    {
      $addFields: {
        instructorName: '$instructor.name',
      },
    },
    {
      $project: {
        instructor: 0,
      },
    },
    {
      $unwind: '$instructorName',
    },
    { $sort: { createdAt: -1 } },
    { $limit: 4 },
  ]);
  return courses;
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCourseById = async (id) => {
  const courseID = new mongoose.Types.ObjectId(id);
  const list = await Course.aggregate([
    {
      $match: {
        _id: courseID,
      },
    },
    {
      $lookup: {
        from: 'lecture',
        localField: 'introLectures',
        foreignField: '_id',
        as: 'introLectures',
      },
    },
    {
      $lookup: {
        from: 'user',
        localField: 'instructor',
        foreignField: '_id',
        as: 'instructor',
      },
    },
    {
      $project: {
        name: 1,
        introDescription: { $trim: { input: '$introDescription' } },
        detailDescription: 1,
        'instructor.name': 1,
        'instructor.email': 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        url: 1,
        updatedAt: 1,
        totalComment: {
          $size: '$comments',
        },
        totalViewer: {
          $size: '$viewers',
        },
        introLectures: 1,
      },
    },
  ]);

  return list[0];
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCourseCommentById = async (id) => {
  const courseID = new mongoose.Types.ObjectId(id);
  const list = await Course.aggregate([
    {
      $match: {
        _id: courseID,
      },
    },
    {
      $lookup: {
        from: 'comment',
        localField: 'comments',
        foreignField: '_id',
        as: 'comments',
      },
    },
    {
      $unwind: {
        path: '$comments',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'user',
        localField: 'comments.user',
        foreignField: '_id',
        as: 'comments.user',
      },
    },
    {
      $project: {
        'comments.rating': 1,
        'comments.content': 1,
        'comments.createdAt': 1,
        'comments.userName': '$comments.user.name',
        averageRating: 1,
      },
    },
    {
      $unwind: '$comments.userName',
    },
    {
      $group: {
        _id: '$_id',
        comments: { $push: '$comments' },
        averageRating: { $first: '$averageRating' },
      },
    },
  ]);

  const course = list[0];
  const total = course.comments.length;
  course.ratingRate = [0, 0, 0, 0, 0];

  course.comments.forEach((element) => {
    switch (element.rating) {
      case 1:
        course.ratingRate[0] += 1;
        break;
      case 2:
        course.ratingRate[1] += 1;
        break;
      case 3:
        course.ratingRate[2] += 1;
        break;
      case 4:
        course.ratingRate[3] += 1;
        break;
      default:
        course.ratingRate[4] += 1;
        break;
    }
  });

  course.ratingRate.forEach((element, index) => {
    course.ratingRate[index] = Math.round((element / total) * 100);
  });

  return course;
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCourseSectionById = async (id) => {
  const courseID = new mongoose.Types.ObjectId(id);
  const list = await Course.aggregate([
    {
      $match: {
        _id: courseID,
      },
    },
    {
      $lookup: {
        from: 'section',
        localField: 'sections',
        foreignField: '_id',
        as: 'sections',
      },
    },
    {
      $unwind: {
        path: '$sections',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'lecture',
        localField: 'sections.lectures',
        foreignField: '_id',
        as: 'sections.lectures',
      },
    },
    {
      $group: {
        _id: '$_id',
        sections: { $push: '$sections' },
      },
    },
  ]);

  return list[0];
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCourseSimilarById = async (id) => {
  const courseID = new mongoose.Types.ObjectId(id);

  const list = await SubCategory.aggregate([
    {
      $match: {
        courses: { $elemMatch: { $eq: courseID } },
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
      $project: {
        'courses._id': 1,
        'courses.name': 1,
        'courses.introDescription': 1,
        'courses.instructor': 1,
        'courses.averageRating': 1,
        'courses.totalTime': 1,
        'courses.totalLecture': 1,
        'courses.urlThumb': 1,
        'courses.createdAt': 1,
        'courses.comments': 1,
        'courses.viewers': 1,
      },
    },
    {
      $unwind: '$courses',
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
        _id: '$courses._id',
        name: '$courses.name',
        introDescription: { $trim: { input: '$courses.introDescription' } },
        instructorName: '$courses.instructor.name',
        averageRating: '$courses.averageRating',
        totalTime: '$courses.totalTime',
        totalLecture: '$courses.totalLecture',
        urlThumb: '$courses.urlThumb',
        createdAt: '$courses.createdAt',
        totalComment: { $size: '$courses.comments' },
        totalViewer: { $size: '$courses.viewers' },
      },
    },
    {
      $unwind: '$instructorName',
    },
    { $sort: { createdAt: -1 } },
    {
      $limit: 5,
    },
  ]);

  return list;
};

/**
 * Update course by id
 * @param {ObjectId} courseId
 * @param {Object} updateBody
 * @returns {Promise<Course>}
 */
const updateCourseById = async (courseId, updateBody) => {
  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  Object.assign(course, updateBody);
  await course.save();
  return course;
};

/**
 * Delete course by id
 * @param {ObjectId} courseId
 * @returns {Promise<Course>}
 */
const deleteCourseById = async (courseId) => {
  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  await course.remove();
  return course;
};

module.exports = {
  createCourse,
  queryCourses,
  queryMostViewCourses,
  queryLatestCourses,
  queryHighlightCourses,
  getCourseById,
  getCourseCommentById,
  getCourseSectionById,
  getCourseSimilarById,
  updateCourseById,
  deleteCourseById,
};
