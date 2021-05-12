const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    url: {
      type: String,
      required: true,
    },
    urlThumb: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0.0,
    },
    averageRating: {
      type: Number,
      default: 0.0,
    },
    introDescription: {
      type: String,
      require: true,
    },
    detailDescription: {
      type: String,
      require: true,
    },
    instructor: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    student: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      default: [],
    },
    introLecture: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Lecture',
      default: [],
    },
    comment: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Comment',
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
courseSchema.plugin(toJSON);

/**
 * @typedef Course
 */
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
