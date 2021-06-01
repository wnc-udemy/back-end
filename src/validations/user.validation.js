const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'student', 'instructor', 'admin'),
    isEmailVerified: Joi.boolean(),
    courses: Joi.array(),
    favoriteCourses: Joi.array(),
    histories: Joi.array(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCourses = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    type: Joi.number().integer(),
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const addCourse = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    courseId: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    type: Joi.number().integer(),
  }),
};

const getHistories = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    courseId: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    type: Joi.number().integer(),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
      role: Joi.string().valid('user', 'student', 'instructor', 'admin'),
      isEmailVerified: Joi.boolean(),
      courses: Joi.array(),
      favoriteCourses: Joi.array(),
      histories: Joi.array(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getCourses,
  getUser,
  addCourse,
  getHistories,
  updateUser,
  deleteUser,
};
