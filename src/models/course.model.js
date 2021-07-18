const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    url: {
      type: String,
      required: true,
    },
    urlThumb: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0.0,
    },
    averageRating: {
      type: Number,
      default: 0.0,
    },
    totalTime: {
      type: Number,
      default: 0,
    },
    totalLecture: {
      type: Number,
      default: 0,
    },
    introDescription: {
      type: String,
      require: true,
    },
    detailDescription: {
      type: String,
      require: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    status: {
      // 0: Not complete, 1: Complete, 2: published, 3: Blocked
      type: Number,
      default: 0,
    },
    targets: {
      type: Array,
      default: [],
    },
    instructor: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    viewers: {
      type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
      default: [],
    },
    students: {
      type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
      default: [],
    },
    introLectures: {
      type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Lecture' }],
      default: [],
    },
    comments: {
      type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Comment' }],
      default: [],
    },
    sections: {
      type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Section' }],
      default: [],
    },
  },
  {
    timestamps: true,
    collection: 'course',
  }
);

// add plugin that converts mongoose to json
courseSchema.plugin(toJSON);
courseSchema.plugin(paginate);

// text search
courseSchema.index({ name: 'text' });

/**
 * @typedef Course
 */
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
