const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

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
    order: {
      type: Number,
      required: true,
    },
    lectures: {
      type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Lecture' }],
      default: [],
    },
  },
  {
    timestamps: true,
    collection: 'section',
  }
);

// add plugin that converts mongoose to json
sectionSchema.plugin(toJSON);
sectionSchema.plugin(paginate);

/**
 * @typedef Section
 */
const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;
