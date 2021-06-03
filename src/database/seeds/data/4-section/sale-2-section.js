const { getObjectIds, getObjectId } = require('../../helpers/index');

const sale2Sections = [
  {
    _id: getObjectId('Sale 2 - Section 1'),
    name: 'Introduction',
    totalTime: 1860,
    lectures: getObjectIds([]),
    order: 0,
  },
  {
    _id: getObjectId('Sale 2 - Section 2'),
    name: 'What is Customer Service',
    totalTime: 2400,
    lectures: getObjectIds([]),
    order: 1,
  },
  {
    _id: getObjectId('Sale 2 - Section 3'),
    name: 'Ways to Generate Ideas',
    totalTime: 3780,
    lectures: getObjectIds([]),
    order: 2,
  },
  {
    _id: getObjectId('Sale 2 - Section 4'),
    name: 'Wrap Up',
    totalTime: 3660,
    lectures: getObjectIds([]),
    order: 3,
  },
];

module.exports = sale2Sections;
