const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { sectionService } = require('../services');

const createSection = catchAsync(async (req, res) => {
  const category = await sectionService.createCategory(req.body);
  res.status(httpStatus.CREATED).send(category);
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
  const section = await sectionService.updateSectionById(req.params.sectionId, req.body);
  res.send(section);
});

const deleteSection = catchAsync(async (req, res) => {
  await sectionService.deleteSectionById(req.params.sectionId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSection,
  getSections,
  getSection,
  updateSection,
  deleteSection,
};
