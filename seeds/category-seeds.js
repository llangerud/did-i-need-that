const { Category } = require('../models');

const usercatData = [
  {
    name: "Cars",
    user_id: 1,
  },
  {
    name: "Buses",
    user_id: 2,
  },
  {
    name: "Automobiles",
    user_id: 3,
  },
  {
    name: "Bananas",
    user_id: 4,
  },
  {
    name: "Pandas",
    user_id: 5,
  },
];

const seedUserCategories = () => Category.bulkCreate(usercatData);

module.exports = seedUserCategories;
