const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCourse = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    url: Joi.string().required(),
    urlThumb: Joi.string().required(),
    fee: Joi.number().precision(2).required(),
    discount: Joi.number().min(0).max(100),
    subCategory: Joi.string().custom(objectId).required(),
  }),
};

const getCourses = {
  query: Joi.object().keys({
    name: Joi.string(),
    category: Joi.string().custom(objectId),
    subCategory: Joi.string().custom(objectId),
    role: Joi.string(),
    sortBy: Joi.string(),
    status: Joi.number().integer(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    type: Joi.number().integer(),
  }),
};

const getCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    type: Joi.number().integer(),
  }),
};

const updateCourse = {
  params: Joi.object().keys({
    courseId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      url: Joi.string(),
      urlThumb: Joi.string(),
      fee: Joi.number().precision(2),
      discount: Joi.number().min(0).max(100),
      introDescription: Joi.string(),
      detailDescription: Joi.string(),
      status: Joi.number(),
      targets: Joi.array(),
    })
    .min(1),
};

const deleteCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
};
