const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      index: true,
    },
    rating: {
      type: Number,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'comment',
  }
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);
commentSchema.plugin(paginate);

/**
 * @typedef Comment
 */
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
