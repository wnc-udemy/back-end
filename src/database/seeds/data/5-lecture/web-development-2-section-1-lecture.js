const { getObjectId } = require('../../helpers/index');

const webDevelopment1Section1Lectures = [
  {
    _id: getObjectId('Web development 2 - Section 1 - Lecture 1'),
    name: 'Welcome To The Course!',
    url: 'https://youtu.be/13sH7niTeSM',
    lengthTime: 334,
    type: 0,
    isPreview: true,
    order: 0,
  },
  {
    _id: getObjectId('Web development 2 - Section 1 - Lecture 2'),
    name: 'Curriculum Walkthrough',
    url: 'https://youtu.be/13sH7niTeSM',
    lengthTime: 67,
    type: 0,
    isPreview: true,
    order: 1,
  },
  {
    _id: getObjectId('Web development 2 - Section 1 - Lecture 3'),
    name: 'When Was The Course Last Updated?',
    url: 'https://youtu.be/13sH7niTeSM',
    lengthTime: 145,
    type: 0,
    isPreview: true,
    order: 2,
  },
  {
    _id: getObjectId('Web development 2 - Section 1 - Lecture 4'),
    name: 'Course Change Log',
    url: 'https://gist.github.com/NguyenThienLy/bda3185646d6d03c72247ad3267ba0ff',
    lengthTime: 20,
    type: 1,
    isPreview: true,
    order: 3,
  },
  {
    _id: getObjectId('Web development 2 - Section 1 - Lecture 5'),
    name: 'Will I Get A Job?',
    url: 'https://youtu.be/HF977x9Bja0',
    lengthTime: 376,
    type: 0,
    isPreview: false,
    order: 4,
  },
];

module.exports = webDevelopment1Section1Lectures;
