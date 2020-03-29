const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../../db');
const OrderItemModal = require('./order.item.model');

class Order extends Model {}

const OrderModel = Order.init({
    id: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
    postedDate: {allowNull: false, type: DataTypes.DATE}
}, { sequelize});

module.exports = OrderModel;
