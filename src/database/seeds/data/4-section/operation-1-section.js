const { getObjectIds, getObjectId } = require('../../helpers/index');

const operation1Sections = [
  {
    _id: getObjectId('Operation 1 - Section 1'),
    name: 'Welcome',
    totalTime: 1860,
    lectures: getObjectIds([]),
    order: 0,
  },
  {
    _id: getObjectId('Operation 1 - Section 2'),
    name: 'The Basics',
    totalTime: 2400,
    lectures: getObjectIds([]),
    order: 1,
  },
  {
    _id: getObjectId('Operation 1 - Section 3'),
    name: 'Digging Deeper',
    totalTime: 3780,
    lectures: getObjectIds([]),
    order: 2,
  },
  {
    _id: getObjectId('Operation 1 - Section 4'),
    name: 'Implementing RPA in Your Enterprise',
    totalTime: 3660,
    lectures: getObjectIds([]),
    order: 3,
  },
  {
    _id: getObjectId('Operation 1 - Section 5'),
    name: 'Next Steps',
    totalTime: 6300,
    lectures: getObjectIds([]),
    order: 4,
  },
];

module.exports = operation1Sections;
