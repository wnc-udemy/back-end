const httpStatus = require('http-status');
const moment = require('moment');
const mongoose = require('mongoose');
const { Course, SubCategory, Category, User, History } = require('../models');
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
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMostViewCourses = async (options) => {
  const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
  const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
  const skip = (page - 1) * limit;

  // status: 2 - published
  const courses = await Course.aggregate([
    {
      $match: {
        status: 2,
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
        fee: 1,
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
      $project: {
        'instructor.intro': 0,
        'instructor.description': 0,
        'instructor.histories': 0,
        'instructor.password': 0,
        'instructor.role': 0,
        'instructor.isEmailVerified': 0,
        'instructor.courses': 0,
        'instructor.favoriteCourses': 0,
        'instructor.createdAt': 0,
      },
    },
    { $skip: skip },
    { $limit: limit },
  ]);

  return courses;
};

/**
 * Query for latest courses
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLatestCourses = async (options) => {
  const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
  const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
  const skip = (page - 1) * limit;

  // status: 2 - published
  const courses = await Course.aggregate([
    {
      $match: {
        status: 2,
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
        fee: 1,
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
      $project: {
        'instructor.intro': 0,
        'instructor.description': 0,
        'instructor.histories': 0,
        'instructor.password': 0,
        'instructor.role': 0,
        'instructor.isEmailVerified': 0,
        'instructor.courses': 0,
        'instructor.favoriteCourses': 0,
        'instructor.createdAt': 0,
      },
    },
    { $skip: skip },
    { $limit: limit },
  ]);
  return courses;
};

/**
 * Query for highlight courses
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryHighlightCourses = async (options) => {
  const start = moment().subtract(7, 'days').toDate().toISOString();
  const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
  const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
  const skip = (page - 1) * limit;

  // status: 2 - published
  const courses = await Course.aggregate([
    {
      $match: {
        createdAt: {
          $gte: start,
        },
        status: 2,
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
        fee: 1,
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
      $project: {
        'instructor.intro': 0,
        'instructor.description': 0,
        'instructor.histories': 0,
        'instructor.password': 0,
        'instructor.role': 0,
        'instructor.isEmailVerified': 0,
        'instructor.courses': 0,
        'instructor.favoriteCourses': 0,
        'instructor.createdAt': 0,
      },
    },
    { $sort: { createdAt: -1 } },
    { $skip: skip },
    { $limit: limit },
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

  const { courses: courseIds } = await SubCategory.findById(id);

  // status: 2 - published
  const queryFilter = [
    { $match: { _id: { $in: courseIds }, status: 2 } },
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
        'instructor._id': 1,
        'instructor.avatar': 1,
        'instructor.email': 1,
        'instructor.name': 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        fee: 1,
        urlThumb: 1,
        createdAt: 1,
        totalComment: { $size: '$comments' },
        totalViewer: { $size: '$viewers' },
        total: 1,
      },
    },
    { $sort: sort },
    { $skip: skip },
    { $limit: limit },
  ];

  // status: 2 - published
  const queryTotal = {
    _id: { $in: courseIds },
    status: 2,
  };

  if (name.length > 0) {
    queryFilter.unshift({
      $match: { $text: { $search: name } },
    });

    queryTotal.$text = { $search: name };
  }

  const total = await Course.find(queryTotal).count();
  const courses = await Course.aggregate(queryFilter);

  return { courses, total };
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
    { $group: { _id: '$_id', Ids: { $push: '$subCategories.courses' } } },
  ]);

  const { Ids } = result[0];
  let courseIds = [];

  Ids.forEach((e) => {
    courseIds = [...courseIds, ...e];
  });

  // status: 2 - published
  const queryFilter = [
    { $match: { _id: { $in: courseIds }, status: 2 } },
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
        'instructor._id': 1,
        'instructor.avatar': 1,
        'instructor.email': 1,
        'instructor.name': 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        fee: 1,
        urlThumb: 1,
        createdAt: 1,
        totalComment: { $size: '$comments' },
        totalViewer: { $size: '$viewers' },
        total: 1,
      },
    },
    { $sort: sort },
    { $skip: skip },
    { $limit: limit },
  ];

  // status: 2 - published
  const queryTotal = {
    _id: { $in: courseIds },
    status: 2,
  };

  if (name.length > 0) {
    queryFilter.unshift({
      $match: { $text: { $search: name } },
    });

    queryTotal.$text = { $search: name };
  }

  const total = await Course.find(queryTotal).count();
  const courses = await Course.aggregate(queryFilter);

  return { courses, total };
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

  // status: 2 - published
  const queryFilter = [
    {
      $match: { status: 2 },
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
        targets: 1,
        introDescription: { $trim: { input: '$courses.introDescription' } },
        'instructor._id': 1,
        'instructor.avatar': 1,
        'instructor.email': 1,
        'instructor.name': 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        fee: 1,
        urlThumb: 1,
        createdAt: 1,
        totalComment: { $size: '$comments' },
        totalViewer: { $size: '$viewers' },
        total: 1,
      },
    },
    { $sort: sort },
    { $skip: skip },
    { $limit: limit },
  ];

  // status: 2 - published
  const queryTotal = { status: 2 };

  if (name.length > 0) {
    queryFilter.unshift({
      $match: { $text: { $search: name } },
    });

    queryTotal.$text = { $search: name };
  }

  const total = await Course.find(queryTotal).count();

  const courses = await Course.aggregate(queryFilter);

  return { courses, total };
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
      sort[key] = order === 'desc' ? -1 : 1;
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

  const { courses, total: totalResults } = result;
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
 * Query for admin censorship courses
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAdminCensorshipCourses = async (filter, options) => {
  const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
  const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
  const skip = (page - 1) * limit;
  const { status } = filter;

  const sort = {};
  if (options.sortBy) {
    options.sortBy.split(',').forEach((sortOption) => {
      const [key, order] = sortOption.split(':');
      sort[key] = order === 'desc' ? -1 : 1;
    });
  } else {
    sort.createdAt = 1;
  }

  const courses = await Course.aggregate([
    { $match: { status } },
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
        _id: 1,
        name: 1,
        'instructor._id': 1,
        'instructor.avatar': 1,
        'instructor.email': 1,
        'instructor.name': 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        fee: 1,
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
    { $sort: sort },
    { $skip: skip },
    { $limit: limit },
  ]);
  return courses;
};

/**
 * Query for subscribed courses of user
 * @returns {Promise<QueryResult>}
 */
const querySubscribedCourses = async (id, pagination) => {
  const { limit, skip } = pagination;
  const userId = new mongoose.Types.ObjectId(id);

  const { courses: courseIds } = await User.findById(userId);
  const publishedCourses = await Course.find({ _id: { $in: courseIds }, status: 2 });
  const total = publishedCourses.length;
  const publishedCourseIds = publishedCourses.map((e) => e._id);

  // status: 2 - published
  const courses = await Course.aggregate([
    { $match: { _id: { $in: publishedCourseIds } } },
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
        _id: 1,
        name: 1,
        'instructor._id': 1,
        'instructor.avatar': 1,
        'instructor.email': 1,
        'instructor.name': 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        fee: 1,
        urlThumb: 1,
        createdAt: 1,
        totalComment: { $size: '$comments' },
      },
    },
    { $skip: skip },
    { $limit: limit },
  ]);

  const coursesStatus = await History.aggregate([
    {
      $match: {
        course: { $in: publishedCourseIds },
      },
    },
    {
      $addFields: {
        totalComplete: { $cond: { if: { $eq: ['$status', 2] }, then: 1, else: 0 } },
      },
    },
    {
      $group: {
        _id: '$course',
        totalComplete: {
          $sum: '$totalComplete',
        },
        totalLecture: { $sum: 1 },
      },
    },
  ]);

  const objCoursesStatus = {};
  coursesStatus.forEach((e) => {
    objCoursesStatus[e._id] = e;
  });

  courses.forEach((e) => {
    if (objCoursesStatus[e._id]) {
      e.complete = Math.round((objCoursesStatus[e._id].totalComplete / objCoursesStatus[e._id].totalLecture) * 100);
    } else {
      e.complete = 0;
    }
  });

  return { courses, total };
};

/**
 * Query for favorite courses of user
 * @returns {Promise<QueryResult>}
 */
const queryFavoriteCourses = async (id, pagination) => {
  const userId = new mongoose.Types.ObjectId(id);
  const { limit, skip } = pagination;

  const { favoriteCourses: courseIds } = await User.findById(userId);
  const total = await Course.find({ _id: { $in: courseIds }, status: 2 }).count();

  // status: 2 - published
  const courses = await Course.aggregate([
    { $match: { _id: { $in: courseIds }, status: 2 } },
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
        _id: 1,
        name: 1,
        targets: 1,
        introDescription: { $trim: { input: '$introDescription' } },
        'instructor._id': 1,
        'instructor.avatar': 1,
        'instructor.email': 1,
        'instructor.name': 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        fee: 1,
        urlThumb: 1,
        createdAt: 1,
        totalComment: { $size: '$comments' },
        totalViewer: { $size: '$viewers' },
      },
    },
    { $skip: skip },
    { $limit: limit },
  ]);

  return { courses, total };
};

/**
 * Query for your created courses of user
 * @returns {Promise<QueryResult>}
 */
const queryYourCreatedCourses = async (filter, pagination) => {
  const { limit, skip } = pagination;
  const { id, status } = filter;
  const userId = new mongoose.Types.ObjectId(id);

  const total = await Course.find({ instructor: userId, status }).count();

  const courses = await Course.aggregate([
    {
      $match: {
        instructor: userId,
        status,
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
        _id: 1,
        name: 1,
        targets: 1,
        introDescription: { $trim: { input: '$introDescription' } },
        'instructor._id': 1,
        'instructor.avatar': 1,
        'instructor.email': 1,
        'instructor.name': 1,
        averageRating: 1,
        totalTime: 1,
        totalLecture: 1,
        fee: 1,
        urlThumb: 1,
        createdAt: 1,
        totalComment: { $size: '$comments' },
        totalViewer: { $size: '$viewers' },
      },
    },
    { $skip: skip },
    { $limit: limit },
  ]);

  return { courses, total };
};

// /**
//  * Query for courses of user
//  * @param {Object} filter - Mongo filter
//  * @param {Object} options - Query options
//  * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
//  * @param {number} [options.limit] - Maximum number of results per page (default = 10)
//  * @param {number} [options.page] - Current page (default = 1)
//  * @returns {Promise<QueryResult>}
//  */
// const queryCoursesByUserId = async (id, filter, options) => {
//   const userId = new mongoose.Types.ObjectId(id);
//   const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
//   const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
//   const skip = (page - 1) * limit;
//   const { type } = filter;

//   let result;

//   // subscribed
//   if (type === 0) {
//     result = await querySubscribedCourses(userId, { limit, skip });
//   }
//   // favorite
//   else if (type === 1) {
//     result = await queryFavoriteCourses(userId, { limit, skip });
//   }
//   // your created
//   else {
//     result = await queryYourCreatedCourses({ userId, status }, { limit, skip });
//   }

//   const { courses, total: totalResults } = result;
//   const totalPages = Math.ceil(totalResults / limit);

//   return { courses, page, limit, totalPages, totalResults };
// };

// /**
//  * Query for courses of instructor
//  * @param {Object} filter - Mongo filter
//  * @param {Object} options - Query options
//  * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
//  * @param {number} [options.limit] - Maximum number of results per page (default = 10)
//  * @param {number} [options.page] - Current page (default = 1)
//  * @returns {Promise<QueryResult>}
//  */
// const queryCoursesOfInstructorByUserId = async (id, filter, options) => {
//   const userId = new mongoose.Types.ObjectId(id);
//   const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
//   const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
//   const skip = (page - 1) * limit;
//   const { status } = filter;

//   const result = await queryYourCreatedCourses({ userId, status }, { limit, skip });

//   const { courses, total: totalResults } = result;
//   const totalPages = Math.ceil(totalResults / limit);

//   return { courses, page, limit, totalPages, totalResults };
// };

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
 * @param {number} status
 * @returns {Promise<Category>}
 */
const getCourseDetailById = async (id, status) => {
  const courseId = new mongoose.Types.ObjectId(id);

  const list = await Course.aggregate([
    {
      $match: {
        _id: courseId,
        status: { $in: status },
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
        targets: 1,
        fee: 1,
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

  if (list.length === 0) {
    return undefined;
  }

  return list[0];
};

/**
 * get course by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCourseById = async (id) => {
  return Course.findById(id);
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @param {number} status
 * @returns {Promise<Category>}
 */
const getCourseCommentById = async (id, status) => {
  const courseID = new mongoose.Types.ObjectId(id);

  const course = await Course.findOne({
    _id: courseID,
    status: { $in: status },
  });

  if (course.comments.length === 0) {
    const { _id, comments } = course;
    return { _id, comments, averageRating: 0, ratingRate: [0, 0, 0, 0, 0] };
  }

  // TODO: if course not exits comment
  const list = await Course.aggregate([
    {
      $match: {
        _id: courseID,
        status: { $in: status },
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
    { $sort: { 'comments.createdAt': -1 } },
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

  if (list.length === 0) {
    return undefined;
  }

  const item = list[0];
  const total = item.comments.length;
  item.ratingRate = [0, 0, 0, 0, 0];

  item.comments.forEach((element) => {
    switch (element.rating) {
      case 1:
        item.ratingRate[0] += 1;
        break;
      case 2:
        item.ratingRate[1] += 1;
        break;
      case 3:
        item.ratingRate[2] += 1;
        break;
      case 4:
        item.ratingRate[3] += 1;
        break;
      default:
        item.ratingRate[4] += 1;
        break;
    }
  });

  item.ratingRate.forEach((element, index) => {
    item.ratingRate[index] = Math.round((element / total) * 100);
  });

  return item;
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @param {number} status
 * @returns {Promise<Category>}
 */
const getCourseSectionById = async (id, status) => {
  const courseID = new mongoose.Types.ObjectId(id);

  const course = await Course.findOne({
    _id: courseID,
    status: { $in: status },
  });

  if (course.sections.length === 0) {
    const { _id, sections } = course;
    return { _id, sections, totalSection: 0, totalTime: 0, totalLecture: 0 };
  }

  const list = await Course.aggregate([
    {
      $match: {
        _id: courseID,
        status: { $in: status },
      },
    },
    {
      $project: {
        totalSection: { $size: '$sections' },
        sections: 1,
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
      $sort: { 'sections.order': 1 },
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
      $unwind: {
        path: '$sections',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: '$_id',
        sections: { $push: '$sections' },
        totalSection: { $first: '$totalSection' },
        totalTime: { $sum: '$sections.totalTime' },
        totalLecture: { $sum: { $size: '$sections.lectures' } },
      },
    },
  ]);

  if (list.length === 0) {
    return undefined;
  }

  const { sections } = list[0];

  sections.forEach((e) => {
    e.lectures.sort((a, b) => a.order - b.order);
  });

  return list[0];
};

/**
 * Get course by id
 * @param {ObjectId} id
 * @param {number} status
 * @returns {Promise<Category>}
 */
const getCourseSimilarById = async (id, status) => {
  const courseID = new mongoose.Types.ObjectId(id);

  const course = await Course.find({ _id: courseID, status: { $in: status } });

  if (course.length === 0) {
    return undefined;
  }

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
      $match: {
        'courses.status': { $in: status },
      },
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
        instructor: '$courses.instructor',
        averageRating: '$courses.averageRating',
        totalTime: '$courses.totalTime',
        totalLecture: '$courses.totalLecture',
        fee: '$courses.fee',
        urlThumb: '$courses.urlThumb',
        createdAt: '$courses.createdAt',
        totalComment: { $size: '$courses.comments' },
        totalViewer: { $size: '$courses.viewers' },
      },
    },
    {
      $project: {
        'instructor.intro': 0,
        'instructor.description': 0,
        'instructor.histories': 0,
        'instructor.password': 0,
        'instructor.role': 0,
        'instructor.isEmailVerified': 0,
        'instructor.courses': 0,
        'instructor.favoriteCourses': 0,
        'instructor.createdAt': 0,
      },
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
const updateCourseById = async (course, updateBody) => {
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
  querySubscribedCourses,
  queryFavoriteCourses,
  queryYourCreatedCourses,
  queryAdminCensorshipCourses,
  getCourseById,
  getCourseDetailById,
  getCourseCommentById,
  getCourseSectionById,
  getCourseLectureById,
  getCourseSimilarById,
  updateCourseById,
  deleteCourseById,
};
