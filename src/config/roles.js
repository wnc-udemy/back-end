const roles = ['user', 'student', 'instructor', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], []);
roleRights.set(roles[3], ['getUsers', 'manageUsers', 'getCategories', 'manageCategories']);

module.exports = {
  roles,
  roleRights,
};
