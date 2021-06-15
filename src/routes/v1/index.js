const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const categoryRoute = require('./category.route');
const subCategoryRoute = require('./sub-category.route');
const courseRoute = require('./course.route');
const sectionRoute = require('./section.route');
const lectureRoute = require('./lecture.route');
const commentRoute = require('./comment.route');
const historyRoute = require('./history.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/categories',
    route: categoryRoute,
  },
  {
    path: '/sub-categories',
    route: subCategoryRoute,
  },
  {
    path: '/courses',
    route: courseRoute,
  },
  {
    path: '/sections',
    route: sectionRoute,
  },
  {
    path: '/lectures',
    route: lectureRoute,
  },
  {
    path: '/comments',
    route: commentRoute,
  },
  {
    path: '/histories',
    route: historyRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

router.use('/health-check', (req, res) => {
  res.send('ok');
});

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development' || config.env === 'production') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
