const roles = ['user', 'student', 'instructor', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['optionalInfo', 'manageUsers', 'getCategories']);
roleRights.set(roles[2], [
  'optionalInfo',
  'getUsers',
  'manageUsers',
  'getCategories',
  'getCourses',
  'manageCourses',
  'manageComments',
]);
roleRights.set(roles[3], [
  'optionalInfo',
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
