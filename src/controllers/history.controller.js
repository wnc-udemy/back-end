const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { historyService } = require('../services');

const createHistory = catchAsync(async (req, res) => {
  const history = await historyService.createHistory(req.body);
  res.status(httpStatus.CREATED).send(history);
});

const getHistories = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await historyService.queryCategories(filter, options);
  res.send(result);
});

const getHistory = catchAsync(async (req, res) => {
  const history = await historyService.getHistoryById(req.params.historyId);
  if (!history) {
    throw new ApiError(httpStatus.NOT_FOUND, 'History not found');
  }
  res.send(history);
});

const updateHistory = catchAsync(async (req, res) => {
  const { user } = req;
  const { historyId } = req.params;
  const { atTime } = req.body;
  let history;

  history = await historyService.getHistoryById(historyId);

  if (!history) {
    throw new ApiError(httpStatus.NOT_FOUND, 'History not found');
  }

  const { course: courseId } = history;
  const { lengthTime } = history;

  const idx = user.courses.findIndex((e) => e.toString() === courseId.toString());

  if (idx === -1) {
    throw new ApiError(httpStatus.FORBIDDEN, 'History is not part of the subscribed course');
  }

  if (atTime > lengthTime) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'At time great than length time');
  }

  history = await historyService.updateHistory(history, req.body);
  res.send(history);
});

const deleteHistory = catchAsync(async (req, res) => {
  await historyService.deleteHistoryById(req.params.historyId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createHistory,
  getHistories,
  getHistory,
  updateHistory,
  deleteHistory,
};
