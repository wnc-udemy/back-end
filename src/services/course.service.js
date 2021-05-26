const httpStatus = require('http-status');
const { Course } = require('../models');
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
 * Get course by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCourseById = async (id) => {
  return Course.findById(id);
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
  getCourseById,
  updateCourseById,
  deleteCourseById,
};
