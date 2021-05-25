const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const subCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    totalRegister: {
      type: Array,
      default: [0, 0, 0, 0, 0, 0, 0],
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
    collection: 'sub-category',
  }
);

// add plugin that converts mongoose to json
subCategorySchema.plugin(toJSON);
subCategorySchema.plugin(paginate);

/**
 * @typedef SubCategory
 */
const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
