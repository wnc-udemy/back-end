const { getObjectIds, getObjectId } = require('../../helpers/index');

const mobileDevelopment1Sections = [
  {
    _id: getObjectId('Mobile development 1 - Section 1'),
    name: 'Getting Started with iOS Development and Swift 5',
    totalTime: 1860,
    lectures: getObjectIds([]),
    order: 0,
  },
  {
    _id: getObjectId('Mobile development 1 - Section 2'),
    name: 'Xcode Storyboards and Interface Builder',
    totalTime: 2400,
    lectures: getObjectIds([]),
    order: 1,
  },
  {
    _id: getObjectId('Mobile development 1 - Section 3'),
    name: 'Xcode Storyboard and Interface Builder Challenge',
    totalTime: 3780,
    lectures: getObjectIds([]),
    order: 2,
  },
  {
    _id: getObjectId('Mobile development 1 - Section 4'),
    name: 'Swift Programming Basics - Collections, Constants & Variables',
    totalTime: 3660,
    lectures: getObjectIds([]),
    order: 3,
  },
  {
    _id: getObjectId('Mobile development 1 - Section 5'),
    name: 'Swift Programming Basics Challenge',
    totalTime: 6300,
    lectures: getObjectIds([]),
    order: 4,
  },
  {
    _id: getObjectId('Mobile development 1 - Section 6'),
    name: 'Auto Layout and Responsive UIs',
    totalTime: 3600,
    lectures: getObjectIds([]),
    order: 5,
  },
  {
    _id: getObjectId('Mobile development 1 - Section 7'),
    name: 'Using and Understanding Apple Documentation',
    totalTime: 4200,
    lectures: getObjectIds([]),
    order: 6,
  },
  {
    _id: getObjectId('Mobile development 1 - Section 8'),
    name: 'Intermediate Swift Programming - Control Flow and Optionals',
    totalTime: 4080,
    lectures: getObjectIds([]),
    order: 7,
  },
  {
    _id: getObjectId('Mobile development 1 - Section 9'),
    name: 'iOS App Design Patterns and Code Structuring',
    totalTime: 5280,
    lectures: getObjectIds([]),
    order: 8,
  },
  {
    _id: getObjectId('Mobile development 1 - Section 10'),
    name: 'iOS App Design Pattern Challenge',
    totalTime: 1200,
    lectures: getObjectIds([]),
    order: 9,
  },
];

module.exports = mobileDevelopment1Sections;
