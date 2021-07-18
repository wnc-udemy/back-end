const faker = require('faker');
const { getObjectId } = require('../../helpers/index');

const webDevelopment1Comments = [
  {
    _id: getObjectId('Web development 1 - Comment 1'),
    content: faker.lorem.sentence(),
    rating: 4,
    createdAt: faker.date.past(),
    user: getObjectId('Hoang Dan An'),
  },
  {
    _id: getObjectId('Web development 1 - Comment 2'),
    content: faker.lorem.sentence(),
    rating: 4,
    createdAt: faker.date.past(),
    user: getObjectId('Vo Kong Kiet'),
  },
  {
    _id: getObjectId('Web development 1 - Comment 3'),
    content: faker.lorem.sentence(),
    rating: 3,
    createdAt: faker.date.past(),
    user: getObjectId('Trinh Nhat Sinh'),
  },
  {
    _id: getObjectId('Web development 1 - Comment 4'),
    content: faker.lorem.sentence(),
    rating: 3,
    createdAt: faker.date.past(),
    user: getObjectId('Nguyen Van Linh'),
  },
  {
    _id: getObjectId('Web development 2 - Comment 1'),
    content: faker.lorem.sentence(),
    rating: 3,
    createdAt: faker.date.past(),
    user: getObjectId('Hoang Dan An'),
  },
  {
    _id: getObjectId('Web development 2 - Comment 2'),
    content: faker.lorem.sentence(),
    rating: 3,
    createdAt: faker.date.past(),
    user: getObjectId('Vo Kong Kiet'),
  },
  {
    _id: getObjectId('Web development 2 - Comment 3'),
    content: faker.lorem.sentence(),
    rating: 3,
    createdAt: faker.date.past(),
    user: getObjectId('Trinh Nhat Sinh'),
  },
  {
    _id: getObjectId('Web development 2 - Comment 4'),
    content: faker.lorem.sentence(),
    rating: 3,
    createdAt: faker.date.past(),
    user: getObjectId('Nguyen Van Linh'),
  },
  {
    _id: getObjectId('Web development 3 - Comment 1'),
    content: faker.lorem.sentence(),
    rating: 3,
    createdAt: faker.date.past(),
    user: getObjectId('Hoang Dan An'),
  },
  {
    _id: getObjectId('Web development 3 - Comment 2'),
    content: faker.lorem.sentence(),
    rating: 3,
    createdAt: faker.date.past(),
    user: getObjectId('Vo Kong Kiet'),
  },
  {
    _id: getObjectId('Web development 3 - Comment 3'),
    content: faker.lorem.sentence(),
    rating: 3,
    createdAt: faker.date.past(),
    user: getObjectId('Trinh Nhat Sinh'),
  },
  {
    _id: getObjectId('Web development 4 - Comment 4'),
    content: faker.lorem.sentence(),
    rating: 3,
    createdAt: faker.date.past(),
    user: getObjectId('Nguyen Van Linh'),
  },
];

module.exports = webDevelopment1Comments;
