const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../../db');
const OrderItemModal = require('./order.item.model');

class Order extends Model {}

const OrderModel = Order.init({
    id: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
    userName: {allowNull: false , type: DataTypes.STRING},
    userEmail: {allowNull: false , type: DataTypes.STRING},
    userPhoneNumber: {allowNull: false , type: DataTypes.DECIMAL},
    productCart: {allowNull: false , type: DataTypes.STRING},
    totalPrice: {allowNull: false , type: DataTypes.DECIMAL},
    postedDate: {allowNull: false, type: DataTypes.DATE}
}, { sequelize});

module.exports = OrderModel;
