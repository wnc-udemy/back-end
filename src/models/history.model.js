const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const historySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    atTime: {
      type: Number,
      default: 0,
    },
    lengthTime: {
      type: Number,
      default: 0,
    },
    status: {
      // 0: not watch, 1: watching, 2: watched
      type: Number,
      default: 0,
    },
    url: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    lecture: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Lecture',
      required: true,
    },
    course: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Course',
      required: true,
    },
    section: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Section',
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'history',
  }
);

// add plugin that converts mongoose to json
historySchema.plugin(toJSON);
historySchema.plugin(paginate);

/**
 * @typedef History
 */
const History = mongoose.model('History', historySchema);

module.exports = History;
