const { getObjectIds, getObjectId } = require('../../helpers/index');

const mobileDevelopment2Sections = [
  {
    _id: getObjectId('Mobile development 2 - Section 1'),
    name: 'Getting Started',
    totalTime: 1860,
    lectures: getObjectIds([]),
    order: 0,
  },
  {
    _id: getObjectId('Mobile development 2 - Section 2'),
    name: 'Working with Content',
    totalTime: 2400,
    lectures: getObjectIds([]),
    order: 1,
  },
  {
    _id: getObjectId('Mobile development 2 - Section 3'),
    name: 'List Building - With Style!',
    totalTime: 3780,
    lectures: getObjectIds([]),
    order: 2,
  },
  {
    _id: getObjectId('Mobile development 2 - Section 4'),
    name: 'Navigating Users Between Screens',
    totalTime: 3660,
    lectures: getObjectIds([]),
    order: 3,
  },
  {
    _id: getObjectId('Mobile development 2 - Section 5'),
    name: 'Building Reusable Components',
    totalTime: 6300,
    lectures: getObjectIds([]),
    order: 4,
  },
  {
    _id: getObjectId('Mobile development 2 - Section 6'),
    name: 'State Management in React Components',
    totalTime: 3600,
    lectures: getObjectIds([]),
    order: 5,
  },
  {
    _id: getObjectId('Mobile development 2 - Section 7'),
    name: 'How to Handle Screen Layout',
    totalTime: 4200,
    lectures: getObjectIds([]),
    order: 6,
  },
  {
    _id: getObjectId('Mobile development 2 - Section 8'),
    name: 'Putting It All Together - Restaurant Search App',
    totalTime: 4080,
    lectures: getObjectIds([]),
    order: 7,
  },
  {
    _id: getObjectId('Mobile development 2 - Section 9'),
    name: `Using Outside API's`,
    totalTime: 5280,
    lectures: getObjectIds([]),
    order: 8,
  },
  {
    _id: getObjectId('Mobile development 2 - Section 10'),
    name: 'Making Hooks Reusable',
    totalTime: 1200,
    lectures: getObjectIds([]),
    order: 9,
  },
];

module.exports = mobileDevelopment2Sections;
