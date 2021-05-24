const { Seeder } = require('mongo-seeding');
const path = require('path');
const config = require('../../config/config');
const logger = require('../../config/logger');

const newConfig = {
  database: config.mongoose.url,
  dropDatabase: true,
};

const seeder = new Seeder(newConfig);

const collections = seeder.readCollectionsFromPath(path.resolve('src/database/seeds/data'));

seeder
  .import(collections)
  .then(() => {
    logger.info('Seeding successful!');
  })
  .catch(() => {
    logger.error('Seeding fail!');
  });
