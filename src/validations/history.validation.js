const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createHistory = {
  body: Joi.object().keys({
    lecture: Joi.string().custom(objectId).required(),
    course: Joi.string().custom(objectId).required(),
    section: Joi.string().custom(objectId).required(),
    name: Joi.string(),
    url: Joi.string(),
    atTime: Joi.number(),
    lengthTime: Joi.number(),
    status: Joi.number(),
    type: Joi.number(),
  }),
};

const getHistories = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getHistory = {
  params: Joi.object().keys({
    historyId: Joi.string().custom(objectId),
  }),
};

const updateHistory = {
  params: Joi.object().keys({
    historyId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      atTime: Joi.number(),
      status: Joi.number(),
    })
    .min(1),
};

const deleteHistory = {
  params: Joi.object().keys({
    historyId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createHistory,
  getHistories,
  getHistory,
  updateHistory,
  deleteHistory,
};
