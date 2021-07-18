const httpStatus = require('http-status');
const { SubCategory } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a sub category
 * @param {Object} subCategoryBody
 * @returns {Promise<SubCategory>}
 */
const createSubCategory = async (subCategoryBody) => {
  const subCategory = await SubCategory.create(subCategoryBody);
  return subCategory;
};

/**
 * Query for sub categories
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySubCategories = async (filter, options) => {
  const subCategories = await SubCategory.paginate(filter, options);
  return subCategories;
};

/**
 * Query for best register sub categories
 * @returns {Promise<QueryResult>}
 */
const queryMostSubscribedSubCategories = async () => {
  const subCategories = await SubCategory.aggregate([
    {
      $project: {
        name: 1,
        total: {
          $reduce: {
            input: '$totalRegister',
            initialValue: 0,
            in: { $sum: ['$$value', '$$this'] },
          },
        },
      },
    },
    { $sort: { total: -1 } },
    { $limit: 10 },
  ]);
  return subCategories;
};

/**
 * Get sub category by id
 * @param {ObjectId} id
 * @returns {Promise<SubCategory>}
 */
const getSubCategoryById = async (id) => {
  return SubCategory.findById(id);
};

/**
 * Get sub categories
 * @param {Array<string>} ids
 * @returns {Promise<SubCategory>}
 */
const getSubCategories = async (ids) => {
  return SubCategory.find({ _id: { $in: ids } });
};

/**
 * Get sub category by course id
 * @param {ObjectId} id
 * @returns {Promise<SubCategory>}
 */
const getSubCategoryByCourseId = async (id) => {
  return SubCategory.findOne({ courses: { $elemMatch: { $eq: id } } });
};

/**
 * Update sub category by id
 * @param {ObjectId} subCategoryId
 * @param {Object} updateBody
 * @returns {Promise<SubCategory>}
 */
const updateSubCategoryById = async (subCategoryId, updateBody) => {
  const subCategory = await getSubCategoryById(subCategoryId);
  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sub category not found');
  }
  Object.assign(subCategory, updateBody);
  await subCategory.save();
  return subCategory;
};

/**
 * Delete sub category by id
 * @param {ObjectId} subCategoryId
 * @returns {Promise<SubCategory>}
 */
const deleteSubCategoryById = async (subCategoryId) => {
  const subCategory = await getSubCategoryById(subCategoryId);
  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sub category not found');
  }

  if (subCategory.courses.length > 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, `This Sub category have ${subCategory.courses.length} courses`);
  }

  await subCategory.remove();
  return subCategory;
};

module.exports = {
  createSubCategory,
  querySubCategories,
  queryMostSubscribedSubCategories,
  getSubCategoryByCourseId,
  getSubCategoryById,
  getSubCategories,
  updateSubCategoryById,
  deleteSubCategoryById,
};
