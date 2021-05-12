const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const lectureSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    url: {
      type: String,
      default: '',
    },
    lengthTime: {
      type: Number,
      required: true,
    },
    type: {
      // 0: videos, 1: markdown, 2: html, 3: question
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
lectureSchema.plugin(toJSON);

/**
 * @typedef Lecture
 */
const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
