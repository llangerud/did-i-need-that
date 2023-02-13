const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');


class Purchase extends Model {} 

Purchase.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true

    },
    mood: {
        type: DataTypes.STRING,
        allowNull: true

    },
    xused: {
        type: DataTypes.INTEGER,
        allowNull: true

    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }
    },


}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Purchase'
});

module.exports = Purchase;
