const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../../db');

class OrdersItem extends Model {}

const OrdersItemModel = OrdersItem.init({
    orderId: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true },
    animalId: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true },
}, { sequelize, createdAt: false, updatedAt: false });

module.exports = OrdersItemModel;