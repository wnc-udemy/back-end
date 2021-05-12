const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const historySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    subCategories: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'SubCategory',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
historySchema.plugin(toJSON);

/**
 * @typedef History
 */
const History = mongoose.model('History', historySchema);

module.exports = History;
