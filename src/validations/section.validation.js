const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSection = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    totalTime: Joi.number().required(),
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
      totalTime: Joi.string(),
    })
    .min(1),
};

const deleteSection = {
  params: Joi.object().keys({
    property: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection,
  getSections,
  getSection,
  updateSection,
  deleteSection,
};
