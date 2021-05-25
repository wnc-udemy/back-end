const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    subCategories: {
      type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'SubCategory' }],
      default: [],
    },
  },
  {
    timestamps: true,
    collection: 'category',
  }
);

// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);

/**
 * @typedef Category
 */
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
