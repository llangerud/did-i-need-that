const seedCategories = require('./category-seeds');
const seedPurchases = require('./purchase-seeds');
const seedUsers = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedPurchases();
  console.log('\n----- PURCHASES SEEDED -----\n');


  process.exit(0);
};

seedAll();
