const { getObjectIds, getObjectId } = require('../../helpers/index');

const webDevelopment1Sections = [
  {
    _id: getObjectId('Web development 1 - Section 1'),
    name: 'Course Orientation',
    totalTime: 1860,
    lectures: getObjectIds([
      'Web development 1 - Section 1 - Lecture 1',
      'Web development 1 - Section 1 - Lecture 2',
      'Web development 1 - Section 1 - Lecture 3',
      'Web development 1 - Section 1 - Lecture 4',
      'Web development 1 - Section 1 - Lecture 5',
    ]),
  },
  {
    _id: getObjectId('Web development 1 - Section 2'),
    name: 'An Introduction to Web Development',
    totalTime: 2400,
    lectures: getObjectIds([
      'Web development 1 - Section 2 - Lecture 1',
      'Web development 1 - Section 2 - Lecture 2',
      'Web development 1 - Section 2 - Lecture 3',
      'Web development 1 - Section 2 - Lecture 4',
      'Web development 1 - Section 2 - Lecture 5',
      'Web development 1 - Section 2 - Lecture 6',
    ]),
  },
  {
    _id: getObjectId('Web development 1 - Section 3'),
    name: 'HTML: The Essentials',
    totalTime: 3780,
    lectures: getObjectIds([
      'Web development 1 - Section 3 - Lecture 1',
      'Web development 1 - Section 3 - Lecture 2',
      'Web development 1 - Section 3 - Lecture 3',
      'Web development 1 - Section 3 - Lecture 4',
      'Web development 1 - Section 3 - Lecture 5',
    ]),
  },
  {
    _id: getObjectId('Web development 1 - Section 4'),
    name: 'HTML: Next Steps & Semantics',
    totalTime: 3660,
    lectures: getObjectIds([
      'Web development 1 - Section 4 - Lecture 1',
      'Web development 1 - Section 4 - Lecture 2',
      'Web development 1 - Section 4 - Lecture 3',
      'Web development 1 - Section 4 - Lecture 4',
      'Web development 1 - Section 4 - Lecture 5',
    ]),
  },
  {
    _id: getObjectId('Web development 1 - Section 5'),
    name: 'HTML: Forms & Tables',
    totalTime: 6300,
    lectures: getObjectIds([
      'Web development 1 - Section 5 - Lecture 1',
      'Web development 1 - Section 5 - Lecture 2',
      'Web development 1 - Section 5 - Lecture 3',
      'Web development 1 - Section 5 - Lecture 4',
      'Web development 1 - Section 5 - Lecture 5',
    ]),
  },
  {
    _id: getObjectId('Web development 1 - Section 6'),
    name: 'CSS: The Very Basics',
    totalTime: 3600,
    lectures: getObjectIds([
      'Web development 1 - Section 6 - Lecture 1',
      'Web development 1 - Section 6 - Lecture 2',
      'Web development 1 - Section 6 - Lecture 3',
      'Web development 1 - Section 6 - Lecture 4',
      'Web development 1 - Section 6 - Lecture 5',
    ]),
  },
  {
    _id: getObjectId('Web development 1 - Section 7'),
    name: 'The World of CSS Selectors',
    totalTime: 4200,
    lectures: getObjectIds([
      'Web development 1 - Section 7 - Lecture 1',
      'Web development 1 - Section 7 - Lecture 2',
      'Web development 1 - Section 7 - Lecture 3',
      'Web development 1 - Section 7 - Lecture 4',
      'Web development 1 - Section 7 - Lecture 5',
    ]),
  },
  {
    _id: getObjectId('Web development 1 - Section 8'),
    name: 'The CSS Box Model',
    totalTime: 4080,
    lectures: getObjectIds([
      'Web development 1 - Section 8 - Lecture 1',
      'Web development 1 - Section 8 - Lecture 2',
      'Web development 1 - Section 8 - Lecture 3',
      'Web development 1 - Section 8 - Lecture 4',
      'Web development 1 - Section 8 - Lecture 5',
    ]),
  },
  {
    _id: getObjectId('Web development 1 - Section 9'),
    name: 'Other Assorted Useful CSS Properties',
    totalTime: 5280,
    lectures: getObjectIds([
      'Web development 1 - Section 9 - Lecture 1',
      'Web development 1 - Section 9 - Lecture 2',
      'Web development 1 - Section 9 - Lecture 3',
      'Web development 1 - Section 9 - Lecture 4',
      'Web development 1 - Section 9 - Lecture 5',
    ]),
  },
  {
    _id: getObjectId('Web development 1 - Section 10'),
    name: 'Responsive CSS & Flexbox',
    totalTime: 1200,
    lectures: getObjectIds([
      'Web development 1 - Section 10 - Lecture 1',
      'Web development 1 - Section 10 - Lecture 2',
      'Web development 1 - Section 10 - Lecture 3',
      'Web development 1 - Section 10 - Lecture 4',
      'Web development 1 - Section 10 - Lecture 5',
    ]),
  },
];

module.exports = webDevelopment1Sections;
