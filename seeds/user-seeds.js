const { User } = require('../models/index');
const userData = require('./userData.json');

const seedUsers = async () => await User.bulkCreate(userData,{
  individualHooks: true,
  returning: true,
});



module.exports = seedUsers;
