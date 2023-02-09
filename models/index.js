const User = require ('./User');
const Purchase = require ('./Purchase');
const Category = require ('./Category');


User.hasMany(Purchase, {
    foreignKey: 'user_id',
});

Purchase.belongsTo(User, {
    foreignKey: 'user_id',
});

Purchase.belongsTo(Category, {
    foreignKey: 'category_id',
    });
Category.hasMany(Purchase, {

    foreignKey: 'category_id',
});

User.hasMany(Category, {
   foreignKey: 'user_id',
});
Category.belongsTo(User, {
    foreignKey: 'user_id',
});

// User.belongsToMany(Category, { through: UserCategories, foreignKey: 'user_id' });
// Category.belongsToMany(User, { through: UserCategories, foreignKey: 'category_id' });


module.exports = {
    User,
    Purchase,
    Category,
    
};