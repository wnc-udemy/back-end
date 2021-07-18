const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSection = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    course: Joi.string().custom(objectId),
  }),
};

const getSections = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection = {
  params: Joi.object().keys({
    sectionId: Joi.string().custom(objectId),
  }),
};

const updateSection = {
  params: Joi.object().keys({
    sectionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      course: Joi.string().custom(objectId),
    })
    .min(2),
};

const deleteSection = {
  params: Joi.object().keys({
    sectionId: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    course: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createSection,
  getSections,
  getSection,
  updateSection,
  deleteSection,
};
