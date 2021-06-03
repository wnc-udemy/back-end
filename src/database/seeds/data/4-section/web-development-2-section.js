const { getObjectIds, getObjectId } = require('../../helpers/index');

const webDevelopment2Sections = [
  {
    _id: getObjectId('Web development 2 - Section 1'),
    name: 'Getting Started',
    totalTime: 1860,
    lectures: getObjectIds([
      'Web development 2 - Section 1 - Lecture 1',
      'Web development 2 - Section 1 - Lecture 2',
      'Web development 2 - Section 1 - Lecture 3',
      'Web development 2 - Section 1 - Lecture 4',
      'Web development 2 - Section 1 - Lecture 5',
    ]),
    order: 0,
  },
  {
    _id: getObjectId('Web development 2 - Section 2'),
    name: 'The Basics',
    totalTime: 3600,
    lectures: getObjectIds([
      'Web development 2 - Section 2 - Lecture 1',
      'Web development 2 - Section 2 - Lecture 2',
      'Web development 2 - Section 2 - Lecture 3',
      'Web development 2 - Section 2 - Lecture 4',
      'Web development 2 - Section 2 - Lecture 5',
      'Web development 2 - Section 2 - Lecture 6',
    ]),
    order: 1,
  },
  {
    _id: getObjectId('Web development 2 - Section 3'),
    name: 'Course Project - The Basics',
    totalTime: 2800,
    lectures: getObjectIds([
      'Web development 2 - Section 3 - Lecture 1',
      'Web development 2 - Section 3 - Lecture 2',
      'Web development 2 - Section 3 - Lecture 3',
      'Web development 2 - Section 3 - Lecture 4',
      'Web development 2 - Section 3 - Lecture 5',
    ]),
    order: 2,
  },
  {
    _id: getObjectId('Web development 2 - Section 4'),
    name: 'Debugging',
    totalTime: 3600,
    lectures: getObjectIds([
      'Web development 2 - Section 3 - Lecture 1',
      'Web development 2 - Section 3 - Lecture 2',
      'Web development 2 - Section 3 - Lecture 3',
      'Web development 2 - Section 3 - Lecture 4',
      'Web development 2 - Section 3 - Lecture 5',
    ]),
    order: 3,
  },
  {
    _id: getObjectId('Web development 2 - Section 5'),
    name: 'Components & Databinding Deep Dive',
    totalTime: 3000,
    lectures: getObjectIds([
      'Web development 2 - Section 3 - Lecture 1',
      'Web development 2 - Section 3 - Lecture 2',
      'Web development 2 - Section 3 - Lecture 3',
      'Web development 2 - Section 3 - Lecture 4',
      'Web development 2 - Section 3 - Lecture 5',
    ]),
    order: 4,
  },
  {
    _id: getObjectId('Web development 2 - Section 6'),
    name: 'Course Project - Components & Databinding',
    totalTime: 2400,
    lectures: getObjectIds([
      'Web development 2 - Section 3 - Lecture 1',
      'Web development 2 - Section 3 - Lecture 2',
      'Web development 2 - Section 3 - Lecture 3',
      'Web development 2 - Section 3 - Lecture 4',
      'Web development 2 - Section 3 - Lecture 5',
    ]),
    order: 5,
  },
  {
    _id: getObjectId('Web development 2 - Section 7'),
    name: 'Directives Deep Dive',
    totalTime: 1800,
    lectures: getObjectIds([
      'Web development 2 - Section 3 - Lecture 1',
      'Web development 2 - Section 3 - Lecture 2',
      'Web development 2 - Section 3 - Lecture 3',
      'Web development 2 - Section 3 - Lecture 4',
      'Web development 2 - Section 3 - Lecture 5',
    ]),
    order: 6,
  },
  {
    _id: getObjectId('Web development 2 - Section 8'),
    name: 'Using Services & Dependency Injection',
    lectures: getObjectIds([
      'Web development 2 - Section 3 - Lecture 1',
      'Web development 2 - Section 3 - Lecture 2',
      'Web development 2 - Section 3 - Lecture 3',
      'Web development 2 - Section 3 - Lecture 4',
      'Web development 2 - Section 3 - Lecture 5',
    ]),
    order: 7,
  },
  {
    _id: getObjectId('Web development 2 - Section 9'),
    name: 'Course Project - Services & Dependency Injection',
    lectures: getObjectIds([
      'Web development 2 - Section 3 - Lecture 1',
      'Web development 2 - Section 3 - Lecture 2',
      'Web development 2 - Section 3 - Lecture 3',
      'Web development 2 - Section 3 - Lecture 4',
      'Web development 2 - Section 3 - Lecture 5',
    ]),
    order: 8,
  },
  {
    _id: getObjectId('Web development 2 - Section 10'),
    name: 'Changing Pages with Routing',
    lectures: getObjectIds([
      'Web development 2 - Section 3 - Lecture 1',
      'Web development 2 - Section 3 - Lecture 2',
      'Web development 2 - Section 3 - Lecture 3',
      'Web development 2 - Section 3 - Lecture 4',
      'Web development 2 - Section 3 - Lecture 5',
    ]),
    order: 9,
  },
];

module.exports = webDevelopment2Sections;
