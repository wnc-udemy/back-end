const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const lectureSchema = mongoose.Schema(
  {
    name: {
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
      // 0: videos, 1: markdown, 2: question
      type: Number,
      required: true,
    },
    isPreview: {
      type: Boolean,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'lecture',
  }
);

// add plugin that converts mongoose to json
lectureSchema.plugin(toJSON);
lectureSchema.plugin(paginate);

/**
 * @typedef Lecture
 */
const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
