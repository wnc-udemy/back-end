const httpStatus = require('http-status');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');
const { getSubCategories } = require('./sub-category.service');

/**
 * Create a category
 * @param {Object} categoryBody
 * @returns {Promise<Category>}
 */
const createCategory = async (categoryBody) => {
  const category = await Category.create(categoryBody);
  return category;
};

/**
 * Query for categories
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCategories = async (filter, options) => {
  const categories = await Category.paginate(filter, options);
  return categories;
};

/**
 * Query for categories
 * @returns {Promise<QueryResult>}
 */
const queryAllCategories = async () => {
  const categories = await Category.aggregate([
    {
      $lookup: {
        from: 'sub-category',
        localField: 'subCategories',
        foreignField: '_id',
        as: 'subCategories',
      },
    },
    {
      $addFields: {
        'subCategories.total': { $size: '$subCategories.courses' },
      },
    },
    {
      $project: {
        'subCategories.courses': 0,
        'subCategories.bestSellerCourses': 0,
        'subCategories.totalRegister': 0,
      },
    },
    {
      $addFields: {
        total: { $sum: '$subCategories.total' },
      },
    },
  ]);

  return categories;
};

/**
 * Get category by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCategoryById = async (id) => {
  return Category.findById(id);
};

/**
 * Update category by id
 * @param {ObjectId} categoryId
 * @param {Object} updateBody
 * @returns {Promise<Category>}
 */
const updateCategoryById = async (categoryId, updateBody) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  Object.assign(category, updateBody);
  await category.save();
  return category;
};

/**
 * Delete category by id
 * @param {ObjectId} categoryId
 * @returns {Promise<Category>}
 */
const deleteCategoryById = async (categoryId) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  const subCategories = await getSubCategories(category.subCategories);

  const total = subCategories.reduce((sum, e) => sum + e.courses.length, 0);

  if (total > 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, `This category have ${total} courses`);
  }

  await category.remove();
  return category;
};

module.exports = {
  createCategory,
  queryCategories,
  queryAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
