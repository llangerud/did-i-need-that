const { Purchase } = require('../models');

const purchaseData = [
  {
    name: 'Computer',
    price: 100,
    mood: 'happy',
    xused:0,
    user_id: 1,
    category_id: 1,
    
  },
  {
    name: 'Shirt',
    price: 5,
    mood: 'happy',
    xused:0,
    user_id: 2,
    category_id: 1,
    
  },
  
  {
    name: 'Pants',
    price: 5,
    mood: 'happy',
    xused:0,
    user_id: 3,
    category_id: 1,
    
  },
  {
    name: 'Walkman',
    price: 300,
    mood: 'happy',
    xused:0,
    user_id: 4,
    category_id: 1,
    
  },
  {
    name: 'Batteries',
    price: 10,
    mood: 'happy',
    xused:0,
    user_id: 5,
    category_id: 1,
    
  },
];

const seedPurchases = () => Purchase.bulkCreate(purchaseData);

module.exports = seedPurchases;
