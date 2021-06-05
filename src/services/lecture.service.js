const httpStatus = require('http-status');
const { Lecture } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a lecture
 * @param {Object} lectureBody
 * @returns {Promise<Lecture>}
 */
const createLecture = async (lectureBody) => {
  const lecture = await Lecture.create(lectureBody);
  return lecture;
};

/**
 * Query for lectures
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLectures = async (filter, options) => {
  const lectures = await Lecture.paginate(filter, options);
  return lectures;
};

/**
 * Get lecture by id
 * @param {ObjectId} id
 * @returns {Promise<Lecture>}
 */
const getLectureById = async (id) => {
  return Lecture.findById(id);
};

/**
 * Update lecture by id
 * @param {Object} lecture
 * @param {Object} updateBody
 * @returns {Promise<Lecture>}
 */
const updateLectureById = async (lecture, updateBody) => {
  Object.assign(lecture, updateBody);
  await lecture.save();
  return lecture;
};

/**
 * Delete lecture by id
 * @param {ObjectId} lectureId
 * @returns {Promise<Lecture>}
 */
const deleteLectureById = async (lectureId) => {
  const lecture = await getLectureById(lectureId);
  if (!lecture) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lecture not found');
  }
  await lecture.remove();
  return lecture;
};

module.exports = {
  createLecture,
  queryLectures,
  getLectureById,
  updateLectureById,
  deleteLectureById,
};
