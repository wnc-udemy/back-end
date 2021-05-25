const roles = ['user', 'student', 'instructor', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['manageUsers', 'getCategories']);
roleRights.set(roles[3], [
  'getUsers',
  'manageUsers',
  'getCategories',
  'manageCategories',
  'getSubCategories',
  'manageSubCategories',
  'getCourses',
  'manageCourses',
  'getSections',
  'manageSections',
  'getLectures',
  'manageLectures',
  'getComments',
  'manageComments',
  'getHistories',
  'manageHistories',
]);

module.exports = {
  roles,
  roleRights,
};
