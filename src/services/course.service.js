const httpStatus = require('http-status');
const moment = require('moment');
const mongoose = require('mongoose');
const { Course, SubCategory, Category } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a course
 * @param {Object} courseBody
 * @returns {Promise<Course>}
 */
const createCourse = async (courseBody) => {
  const course = await Course.create(courseBody);
  return course;
};

/**
 * Query for most view courses
 * @returns {Promise<QueryResult>}
 */
const queryMostViewCourses = async () => {
  const courses = await Course.aggregate([
    {
      $project: {
        name: 1,
        introDescription: { $trim: { input: '$introDescription' } },
        targets: 1,
        instructor: 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        urlThumb: 1,
        totalComment: {
          $size: '$comments',
        },
        totalViewer: {
          $size: '$viewers',
        },
      },
    },
    { $sort: { totalViewer: -1 } },
    { $limit: 10 },
    {
      $lookup: {
        from: 'user',
        localField: 'instructor',
        foreignField: '_id',
        as: 'instructor',
      },
    },
    {
      $addFields: {
        instructorName: '$instructor.name',
      },
    },
    {
      $project: {
        instructor: 0,
      },
    },
    {
      $unwind: '$instructorName',
    },
  ]);

  return courses;
};

/**
 * Query for latest courses
 * @returns {Promise<QueryResult>}
 */
const queryLatestCourses = async () => {
  const courses = await Course.aggregate([
    {
      $project: {
        name: 1,
        introDescription: { $trim: { input: '$introDescription' } },
        targets: 1,
        instructor: 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        urlThumb: 1,
        totalComment: {
          $size: '$comments',
        },
        createdAt: 1,
      },
    },
    { $sort: { createdAt: -1 } },
    { $limit: 10 },
    {
      $lookup: {
        from: 'user',
        localField: 'instructor',
        foreignField: '_id',
        as: 'instructor',
      },
    },
    {
      $addFields: {
        instructorName: '$instructor.name',
      },
    },
    {
      $project: {
        instructor: 0,
      },
    },
    {
      $unwind: '$instructorName',
    },
  ]);
  return courses;
};

/**
 * Query for highlight courses
 * @returns {Promise<QueryResult>}
 */
const queryHighlightCourses = async () => {
  const start = moment().subtract(7, 'days').toDate().toISOString();

  const courses = await Course.aggregate([
    {
      $match: {
        createdAt: {
          $gte: start,
        },
      },
    },
    {
      $project: {
        name: 1,
        introDescription: { $trim: { input: '$introDescription' } },
        targets: 1,
        instructor: 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        urlThumb: 1,
        createdAt: 1,
        totalComment: {
          $size: '$comments',
        },
        totalViewer: {
          $size: '$viewers',
        },
      },
    },
    { $sort: { totalViewer: -1 } },
    { $limit: 10 },
    {
      $lookup: {
        from: 'user',
        localField: 'instructor',
        foreignField: '_id',
        as: 'instructor',
      },
    },
    {
      $addFields: {
        instructorName: '$instructor.name',
      },
    },
    {
      $project: {
        instructor: 0,
      },
    },
    {
      $unwind: '$instructorName',
    },
    { $sort: { createdAt: -1 } },
    { $limit: 4 },
  ]);
  return courses;
};

/**
 * Query for courses follow sub category
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCoursesFilterFollowSubCategory = async (filter, options) => {
  const { name, id } = filter;
  const { sort, limit, skip } = options;

  const { courses: courseIDs } = await SubCategory.findById(id);

  const queryFilter = [
    { $match: { _id: { $in: courseIDs } } },
    {
      $lookup: {
        from: 'user',
        localField: 'instructor',
        foreignField: '_id',
        as: 'instructor',
      },
    },
    {
      $project: {
        name: 1,
        targets: 1,
        introDescription: { $trim: { input: '$courses.introDescription' } },
        instructorName: '$instructor.name',
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        urlThumb: 1,
        createdAt: 1,
        totalComment: { $size: '$comments' },
        totalViewer: { $size: '$viewers' },
        total: 1,
      },
    },
    {
      $unwind: '$instructorName',
    },
    { $sort: sort },
    { $limit: limit },
    { $skip: skip },
  ];

  const queryTotal = {
    _id: { $in: courseIDs },
  };

  if (name.length > 0) {
    queryFilter.unshift({
      $match: { $text: { $search: name } },
    });

    queryTotal.$text = { $search: name };
  }

  const total = await Course.find(queryTotal).count();
  const courses = await Course.aggregate(queryFilter);

  return [{ courses, total }];
};

/**
 * Query for courses follow category
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCoursesFilterFollowCategory = async (filter, options) => {
  const { name, id } = filter;
  const { sort, limit, skip } = options;

  const result = await Category.aggregate([
    { $match: { _id: id } },
    {
      $lookup: {
        from: 'sub-category',
        localField: 'subCategories',
        foreignField: '_id',
        as: 'subCategories',
      },
    },
    { $unwind: '$subCategories' },
    { $group: { _id: '$_id', IDs: { $push: '$subCategories.courses' } } },
  ]);

  const { IDs } = result[0];
  let courseIDs = [];

  IDs.forEach((e) => {
    courseIDs = [...courseIDs, ...e];
  });

  const queryFilter = [
    { $match: { _id: { $in: courseIDs } } },
    {
      $lookup: {
        from: 'user',
        localField: 'instructor',
        foreignField: '_id',
        as: 'instructor',
      },
    },
    {
      $project: {
        name: 1,
        targets: 1,
        introDescription: { $trim: { input: '$courses.introDescription' } },
        instructorName: '$instructor.name',
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        urlThumb: 1,
        createdAt: 1,
        totalComment: { $size: '$comments' },
        totalViewer: { $size: '$viewers' },
        total: 1,
      },
    },
    {
      $unwind: '$instructorName',
    },
    { $sort: sort },
    { $limit: limit },
    { $skip: skip },
  ];

  const queryTotal = {
    _id: { $in: courseIDs },
  };

  if (name.length > 0) {
    queryFilter.unshift({
      $match: { $text: { $search: name } },
    });

    queryTotal.$text = { $search: name };
  }

  const total = await Course.find(queryTotal).count();
  const courses = await Course.aggregate(queryFilter);

  return [{ courses, total }];
};

/**
 * Query for courses follow category
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCoursesFilter = async (filter, options) => {
  const { name } = filter;
  const { sort, limit, skip } = options;

  const queryFilter = [
    {
      $lookup: {
        from: 'user',
        localField: 'instructor',
        foreignField: '_id',
        as: 'instructor',
      },
    },
    {
      $project: {
        name: 1,
        targets: 1,
        introDescription: { $trim: { input: '$courses.introDescription' } },
        instructorName: '$instructor.name',
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        urlThumb: 1,
        createdAt: 1,
        totalComment: { $size: '$comments' },
        totalViewer: { $size: '$viewers' },
        total: 1,
      },
    },
    {
      $unwind: '$instructorName',
    },
    { $sort: sort },
    { $limit: limit },
    { $skip: skip },
  ];

  const queryTotal = {};

  if (name.length > 0) {
    queryFilter.unshift({
      $match: { $text: { $search: name } },
    });

    queryTotal.$text = { $search: name };
  }

  const total = await Course.find(queryTotal).count();

  const courses = await Course.aggregate(queryFilter);

  return [{ courses, total }];
};

/**
 * Query for advance filter courses
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAdvanceFilterCourses = async (filter, options) => {
  const categoryID = filter.category === undefined ? undefined : new mongoose.Types.ObjectId(filter.category);
  const subCategoryID = filter.subCategory === undefined ? undefined : new mongoose.Types.ObjectId(filter.subCategory);
  const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
  const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
  const skip = (page - 1) * limit;

  const sort = {};
  if (options.sortBy) {
    options.sortBy.split(',').forEach((sortOption) => {
      const [key, order] = sortOption.split(':');
      sort[`courses.${key}`] = order === 'desc' ? -1 : 1;
    });
  } else {
    sort.createdAt = 1;
  }

  let result;

  if (categoryID !== undefined && subCategoryID !== undefined) {
    result = await queryCoursesFilterFollowSubCategory(
      { id: subCategoryID, name: filter.name || '' },
      { limit, skip, sort }
    );
  } else if (categoryID !== undefined && subCategoryID === undefined) {
    result = await queryCoursesFilterFollowCategory({ id: categoryID, name: filter.name || '' }, { limit, skip, sort });
  } else {
    result = await queryCoursesFilter({ name: filter.name || '' }, { limit, skip, sort });
  }

  const { courses, total: totalResults } = result[0];
  const totalPages = Math.ceil(totalResults / limit);

  return { courses, page, limit, totalPages, totalResults };
};

/**
 * Query for courses
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCourses = async (filter, options) => {
  const courses = await Course.paginate(filter, options);
  return courses;
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @returns {Promise<SubCategory>}
 */
const getCourseLectureById = async (id) => {
  const courseID = new mongoose.Types.ObjectId(id);
  const result = await Course.aggregate([
    {
      $match: {
        _id: courseID,
      },
    },
    {
      $lookup: {
        from: 'section',
        localField: 'sections',
        foreignField: '_id',
        as: 'sections',
      },
    },
    {
      $unwind: {
        path: '$sections',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'lecture',
        localField: 'sections.lectures',
        foreignField: '_id',
        as: 'sections.lectures',
      },
    },
    {
      $group: {
        _id: '$_id',
        array: { $push: '$sections.lectures' },
      },
    },
  ]);

  const { array } = result[0];
  let lectures = [];

  array.forEach((e) => {
    lectures = [...lectures, ...e];
  });

  return lectures;
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCourseById = async (id) => {
  const courseID = new mongoose.Types.ObjectId(id);
  const list = await Course.aggregate([
    {
      $match: {
        _id: courseID,
      },
    },
    {
      $lookup: {
        from: 'lecture',
        localField: 'introLectures',
        foreignField: '_id',
        as: 'introLectures',
      },
    },
    {
      $lookup: {
        from: 'user',
        localField: 'instructor',
        foreignField: '_id',
        as: 'instructor',
      },
    },
    {
      $project: {
        name: 1,
        introDescription: { $trim: { input: '$introDescription' } },
        detailDescription: 1,
        'instructor.name': 1,
        'instructor.email': 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        url: 1,
        updatedAt: 1,
        totalComment: {
          $size: '$comments',
        },
        totalViewer: {
          $size: '$viewers',
        },
        introLectures: 1,
      },
    },
  ]);

  return list[0];
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCourseCommentById = async (id) => {
  const courseID = new mongoose.Types.ObjectId(id);
  const list = await Course.aggregate([
    {
      $match: {
        _id: courseID,
      },
    },
    {
      $lookup: {
        from: 'comment',
        localField: 'comments',
        foreignField: '_id',
        as: 'comments',
      },
    },
    {
      $unwind: {
        path: '$comments',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'user',
        localField: 'comments.user',
        foreignField: '_id',
        as: 'comments.user',
      },
    },
    {
      $project: {
        'comments.rating': 1,
        'comments.content': 1,
        'comments.createdAt': 1,
        'comments.userName': '$comments.user.name',
        averageRating: 1,
      },
    },
    {
      $unwind: '$comments.userName',
    },
    {
      $group: {
        _id: '$_id',
        comments: { $push: '$comments' },
        averageRating: { $first: '$averageRating' },
      },
    },
  ]);

  const course = list[0];
  const total = course.comments.length;
  course.ratingRate = [0, 0, 0, 0, 0];

  course.comments.forEach((element) => {
    switch (element.rating) {
      case 1:
        course.ratingRate[0] += 1;
        break;
      case 2:
        course.ratingRate[1] += 1;
        break;
      case 3:
        course.ratingRate[2] += 1;
        break;
      case 4:
        course.ratingRate[3] += 1;
        break;
      default:
        course.ratingRate[4] += 1;
        break;
    }
  });

  course.ratingRate.forEach((element, index) => {
    course.ratingRate[index] = Math.round((element / total) * 100);
  });

  return course;
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCourseSectionById = async (id) => {
  const courseID = new mongoose.Types.ObjectId(id);
  const list = await Course.aggregate([
    {
      $match: {
        _id: courseID,
      },
    },
    {
      $lookup: {
        from: 'section',
        localField: 'sections',
        foreignField: '_id',
        as: 'sections',
      },
    },
    {
      $unwind: {
        path: '$sections',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'lecture',
        localField: 'sections.lectures',
        foreignField: '_id',
        as: 'sections.lectures',
      },
    },
    {
      $group: {
        _id: '$_id',
        sections: { $push: '$sections' },
      },
    },
  ]);

  return list[0];
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCourseSimilarById = async (id) => {
  const courseID = new mongoose.Types.ObjectId(id);

  const list = await SubCategory.aggregate([
    {
      $match: {
        courses: { $elemMatch: { $eq: courseID } },
      },
    },
    {
      $lookup: {
        from: 'course',
        localField: 'courses',
        foreignField: '_id',
        as: 'courses',
      },
    },
    {
      $unwind: '$courses',
    },
    {
      $lookup: {
        from: 'user',
        localField: 'courses.instructor',
        foreignField: '_id',
        as: 'courses.instructor',
      },
    },
    {
      $project: {
        _id: '$courses._id',
        name: '$courses.name',
        introDescription: { $trim: { input: '$courses.introDescription' } },
        targets: '$courses.targets',
        instructorName: '$courses.instructor.name',
        averageRating: '$courses.averageRating',
        totalTime: '$courses.totalTime',
        totalLecture: '$courses.totalLecture',
        urlThumb: '$courses.urlThumb',
        createdAt: '$courses.createdAt',
        totalComment: { $size: '$courses.comments' },
        totalViewer: { $size: '$courses.viewers' },
      },
    },
    {
      $unwind: '$instructorName',
    },
    { $sort: { createdAt: -1 } },
    {
      $limit: 5,
    },
  ]);

  return list;
};

/**
 * Update course by id
 * @param {ObjectId} courseId
 * @param {Object} updateBody
 * @returns {Promise<Course>}
 */
const updateCourseById = async (courseId, updateBody) => {
  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  Object.assign(course, updateBody);
  await course.save();
  return course;
};

/**
 * Delete course by id
 * @param {ObjectId} courseId
 * @returns {Promise<Course>}
 */
const deleteCourseById = async (courseId) => {
  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  await course.remove();
  return course;
};

module.exports = {
  createCourse,
  queryCourses,
  queryMostViewCourses,
  queryLatestCourses,
  queryHighlightCourses,
  queryAdvanceFilterCourses,
  getCourseById,
  getCourseCommentById,
  getCourseSectionById,
  getCourseLectureById,
  getCourseSimilarById,
  updateCourseById,
  deleteCourseById,
};
