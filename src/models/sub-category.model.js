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
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Course',
      required: true,
    },
    bestSellerCourses: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Course',
      required: true,
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
