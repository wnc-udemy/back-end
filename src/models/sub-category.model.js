const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const subCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    courses: {
      type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Course' }],
      default: [],
    },
    bestSellerCourses: {
      type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Course' }],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
subCategorySchema.plugin(toJSON);

/**
 * @typedef SubCategory
 */
const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
