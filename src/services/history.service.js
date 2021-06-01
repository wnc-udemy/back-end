const httpStatus = require('http-status');
const mongoose = require('mongoose');
const { History } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a history
 * @param {Object} historyBody
 * @returns {Promise<History>}
 */
const createHistory = async (historyBody) => {
  const history = await History.create(historyBody);
  return history;
};

/**
 * Create a multi histories
 * @param {Object} historyBodies
 * @returns {Promise<Ids>}
 */
const createHistories = async (historyBodies) => {
  const histories = await History.insertMany(historyBodies);
  const Ids = histories.map((e) => e._id);
  return Ids;
};

/**
 * Query for histories
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryHistories = async (filter, options) => {
  const histories = await History.paginate(filter, options);
  return histories;
};

/**
 * Get histories by course id
 * @param {ObjectId} id
 * @returns {Promise<History>}
 */
const getHistoriesByCourseId = async (id) => {
  const courseID = new mongoose.Types.ObjectId(id);
  const histories = await History.aggregate([
    {
      $match: {
        course: courseID,
      },
    },
    {
      $group: {
        _id: '$section',
        lectures: { $push: '$$ROOT' },
      },
    },
    {
      $lookup: {
        from: 'section',
        localField: '_id',
        foreignField: '_id',
        as: 'section',
      },
    },
    {
      $project: {
        lectures: 1,
        _id: 1,
        name: '$section.name',
        totalTime: '$section.totalTime',
      },
    },
    {
      $unwind: '$name',
    },
    {
      $unwind: '$totalTime',
    },
  ]);

  return histories;
};

/**
 * Get history by id
 * @param {ObjectId} id
 * @returns {Promise<History>}
 */
const getHistoryById = async (id) => {
  return History.findById(id);
};

/**
 * Update history by id
 * @param {ObjectId} historyId
 * @param {Object} updateBody
 * @returns {Promise<History>}
 */
const updateHistoryById = async (historyId, updateBody) => {
  const { atTime, status: statusBody } = updateBody;
  const history = await getHistoryById(historyId);
  const { lengthTime, status } = history;
  const statusDefine = [0, 1, 2];

  if (!history) {
    throw new ApiError(httpStatus.NOT_FOUND, 'History not found');
  }
  if (atTime > lengthTime) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'At time great than length time');
  }
  if (!statusDefine.includes(status) || status + 1 !== statusBody) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid status');
  }

  Object.assign(history, updateBody);
  await history.save();
  return history;
};

/**
 * Update a multi histories
 * @param {Object} historyBodies
 * @returns {Promise<Ids>}
 */
const updateHistories = async (historyBodies) => {
  const histories = await History.insertMany(historyBodies);
  const Ids = histories.map((e) => e._id);
  return Ids;
};

/**
 * Delete history by id
 * @param {ObjectId} historyId
 * @returns {Promise<History>}
 */
const deleteHistoryById = async (historyId) => {
  const history = await getHistoryById(historyId);
  if (!history) {
    throw new ApiError(httpStatus.NOT_FOUND, 'History not found');
  }
  await history.remove();
  return history;
};

module.exports = {
  createHistory,
  createHistories,
  queryHistories,
  getHistoryById,
  getHistoriesByCourseId,
  updateHistoryById,
  updateHistories,
  deleteHistoryById,
};
