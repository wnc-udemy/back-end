const { getObjectId, getObjectIds } = require('mongo-seeding');

const mapToEntities = (names) => {
  return names.map((name) => {
    return {
      _id: getObjectId(name),
      name,
    };
  });
};

module.exports = {
  mapToEntities,
  getObjectId,
  getObjectIds,
};
