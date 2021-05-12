const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCourse = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    url: Joi.string().required(),
    urlThumb: Joi.string().required(),
    fee: Joi.number().precision(2).required(),
    discount: Joi.number().min(0).max(100).required(),
    averageRating: Joi.number().precision(2).min(0).max(5).required(),
    introDescription: Joi.string().description().required(),
    detailDescription: Joi.string().description().required(),
  }),
};

const getCourses = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId),
  }),
};

const updateCourse = {
  params: Joi.object().keys({
    courseId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      url: Joi.string().required(),
      urlThumb: Joi.string().required(),
      fee: Joi.number().precision(2).required(),
      discount: Joi.number().min(0).max(100).required(),
      averageRating: Joi.number().precision(2).min(0).max(5).required(),
      introDescription: Joi.string().description().required(),
      detailDescription: Joi.string().description().required(),
    })
    .min(1),
};

const deleteCourse = {
  params: Joi.object().keys({
    property: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
};
