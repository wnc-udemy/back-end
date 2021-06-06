const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSubCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    category: Joi.string().custom(objectId).required(),
  }),
};

const getSubCategories = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSubCategory = {
  params: Joi.object().keys({
    subCategoryId: Joi.string().custom(objectId),
  }),
};

const updateSubCategory = {
  params: Joi.object().keys({
    subCategoryId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

const deleteSubCategory = {
  params: Joi.object().keys({
    subCategoryId: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    category: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
