const roles = ['user', 'student', 'instructor', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['optionalInfo', 'manageUsers', 'getCategories']);
roleRights.set(roles[1], [
  'getUsers',
  'manageUsers',
  'getCourseMoodleFollowUser',
  'getCourses',
  'manageHistories',
  'getHistories',
]);
roleRights.set(roles[2], [
  'optionalInfo',
  'getUsers',
  'manageUsers',
  'getCategories',
  'getCourses',
  'manageCourses',
  'manageComments',
  'manageHistories',
  'getHistories',
  'course.create',
  'course.update',
  'section.create',
  'section.update',
  'section.delete',
  'section.get',
  'section.gets',
  'lecture.create',
  'lecture.update',
  'lecture.delete',
]);
roleRights.set(roles[3], [
  'optionalInfo',
  'getUsers',
  'manageUsers',
  'user.create',
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
  'getCoursesOfInstructor',
  'course.update',
]);

module.exports = {
  roles,
  roleRights,
};
