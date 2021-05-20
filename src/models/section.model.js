const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const sectionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    totalTime: {
      type: Number,
      default: 0,
    },
    lectures: {
      type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Lecture' }],
      default: [],
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
