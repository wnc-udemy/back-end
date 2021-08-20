const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'student', 'instructor', 'admin'),
    avatar: Joi.string(),
    intro: Joi.string(),
    description: Joi.string(),
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
    status: Joi.number(),
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
    status: Joi.number().integer(),
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

const updateCourse = {
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
      oldPassword: Joi.string().custom(password),
      newPassword: Joi.string().custom(password),
      name: Joi.string(),
      role: Joi.string().valid('user', 'instructor', 'admin'),
      status: Joi.number().valid(0, 1),
      avatar: Joi.string(),
      intro: Joi.string(),
      description: Joi.string(),
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
  getHistories,
  getUser,
  updateCourse,
  updateUser,
  deleteUser,
};
