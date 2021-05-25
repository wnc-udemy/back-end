const { getObjectIds, getObjectId } = require('../../helpers/index');

const categories = [
  {
    _id: getObjectId('Development'),
    name: 'Development',
    subCategories: getObjectIds(['Web development', 'Mobile development', 'Game development', 'Software testing']),
  },
  {
    _id: getObjectId('Business'),
    name: 'Business',
    subCategories: getObjectIds(['Sales', 'Operations', 'Business Law', 'Industry', 'E-commerce']),
  },
  {
    _id: getObjectId('Finance & Accounting'),
    name: 'Finance & Accounting',
    subCategories: getObjectIds(['Investing & Trading', 'Economics', 'Taxes']),
  },
  {
    _id: getObjectId('Design'),
    name: 'Design',
    subCategories: getObjectIds(['Web design', 'Design tools', 'Fashion design']),
  },
  {
    _id: getObjectId('Marketing'),
    name: 'Marketing',
    subCategories: getObjectIds(['Digital marketing', 'Branding', 'Product marketing']),
  },
  {
    _id: getObjectId('Life style'),
    name: 'Life style',
    subCategories: getObjectIds(['Gaming', 'Travel', 'Beauty & makeup']),
  },
  {
    _id: getObjectId('Heath & Fitness'),
    name: 'Heath & Fitness',
    subCategories: ['Fitness', 'Yoga', 'Dance'],
  },
  {
    _id: getObjectId('Music'),
    name: 'Music',
    subCategories: ['Instruments', 'Music software', 'Vocal'],
  },
];

module.exports = categories;
