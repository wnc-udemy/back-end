const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const sectionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    totalTime: {
      type: Number,
      default: 0,
    },
    lectures: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Lecture',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
sectionSchema.plugin(toJSON);

/**
 * @typedef Section
 */
const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;
