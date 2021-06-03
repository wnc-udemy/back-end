const { getObjectIds, getObjectId } = require('../../helpers/index');

const sale1Sections = [
  {
    _id: getObjectId('Sale 1 - Section 1'),
    name: 'Welcome',
    totalTime: 1860,
    lectures: getObjectIds([]),
    order: 0,
  },
  {
    _id: getObjectId('Sale 1 - Section 2'),
    name: 'What is Sales?',
    totalTime: 2400,
    lectures: getObjectIds([]),
    order: 1,
  },
  {
    _id: getObjectId('Sale 1 - Section 3'),
    name: 'Part 1 - Building a Sales Relationship',
    totalTime: 3780,
    lectures: getObjectIds([]),
    order: 2,
  },
  {
    _id: getObjectId('Sale 1 - Section 4'),
    name: 'Part 2 - Diagnosing the Sale',
    totalTime: 3660,
    lectures: getObjectIds([]),
    order: 3,
  },
  {
    _id: getObjectId('Sale 1 - Section 5'),
    name: 'Part 3 - Prescribing a Solution',
    totalTime: 6300,
    lectures: getObjectIds([]),
    order: 4,
  },
  {
    _id: getObjectId('Sale 1 - Section 6'),
    name: 'Part 4 - Objection Handling',
    totalTime: 3600,
    lectures: getObjectIds([]),
    order: 5,
  },
  {
    _id: getObjectId('Sale 1 - Section 7'),
    name: 'Part 5 - Closing Sales',
    totalTime: 4200,
    lectures: getObjectIds([]),
    order: 6,
  },
  {
    _id: getObjectId('Sale 1 - Section 8'),
    name: 'Efficiency & Measurement in Sales',
    totalTime: 4080,
    lectures: getObjectIds([]),
    order: 7,
  },
  {
    _id: getObjectId('Sale 1 - Section 9'),
    name: 'Bonus',
    totalTime: 5280,
    lectures: getObjectIds([]),
    order: 8,
  },
];

module.exports = sale1Sections;
