const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { subCategoryService, categoryService } = require('../services');

const createSubCategory = catchAsync(async (req, res) => {
  const { category: categoryId, ...subCategoryBody } = req.body;

  const category = await categoryService.getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  const subCategory = await subCategoryService.createSubCategory(subCategoryBody);
  if (!subCategory) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Create sub Category fail');
  }

  category.subCategories.push(subCategory._id);
  await category.save();

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
  const { category: categoryId } = req.query;
  const { subCategoryId } = req.params;
  let subCategory;

  const category = await categoryService.getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  subCategory = await subCategoryService.getSubCategoryById(subCategoryId);
  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sub category not found');
  }

  if (!category.subCategories.includes(subCategory._id)) {
    throw new ApiError(httpStatus.NOT_FOUND, 'This category was not included sub category');
  }

  subCategory = await subCategoryService.deleteSubCategoryById(subCategoryId);
  if (!subCategory) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Delete sub category fail');
  }

  const idx = category.subCategories.findIndex((e) => e.toString() === subCategory._id.toString());
  if (idx !== -1) {
    category.subCategories.splice(idx, 1);
  }
  await category.save();

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
