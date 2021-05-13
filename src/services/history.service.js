const httpStatus = require('http-status');
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
  const history = await getHistoryById(historyId);
  if (!history) {
    throw new ApiError(httpStatus.NOT_FOUND, 'History not found');
  }
  Object.assign(history, updateBody);
  await history.save();
  return history;
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
  queryHistories,
  getHistoryById,
  updateHistoryById,
  deleteHistoryById,
};
