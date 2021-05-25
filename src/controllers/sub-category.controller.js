const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { subCategoryService } = require('../services');

const createSubCategory = catchAsync(async (req, res) => {
  const subCategory = await subCategoryService.createSubCategory(req.body);
  res.status(httpStatus.CREATED).send(subCategory);
});

const getSubCategories = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await subCategoryService.querySubCategories(filter, options);
  res.send(result);
});

const getMostSubscribedSubCategories = catchAsync(async (req, res) => {
  const result = await subCategoryService.queryMostSubscribedSubCategories();
  res.send(result);
});

const getSubCategory = catchAsync(async (req, res) => {
  const subCategory = await subCategoryService.getSubCategoryById(req.params.subCategoryId);
  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sub category not found');
  }
  res.send(subCategory);
});

const updateSubCategory = catchAsync(async (req, res) => {
  const subCategory = await subCategoryService.updateSubCategoryById(req.params.subCategoryId, req.body);
  res.send(subCategory);
});

const deleteSubCategory = catchAsync(async (req, res) => {
  await subCategoryService.deleteSubCategoryById(req.params.subCategoryId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSubCategory,
  getSubCategories,
  getMostSubscribedSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
