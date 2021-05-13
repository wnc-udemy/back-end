const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createLecture = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    url: Joi.string(),
    type: Joi.number(),
    lengthTime: Joi.number().required(),
  }),
};

const getLectures = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLecture = {
  params: Joi.object().keys({
    lectureId: Joi.string().custom(objectId),
  }),
};

const updateLecture = {
  params: Joi.object().keys({
    lectureId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      url: Joi.string(),
      type: Joi.number(),
      lengthTime: Joi.number(),
    })
    .min(1),
};

const deleteLecture = {
  params: Joi.object().keys({
    lectureId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createLecture,
  getLectures,
  getLecture,
  updateLecture,
  deleteLecture,
};
