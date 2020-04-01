const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');
const OrdersItemModel = require('./order.item.model');
const CustomersModel = require('../customers/customer.model');
const AnimalsModel = require('../animals/animals.model');

class Order extends Model { }

const OrdersModel = Order.init({
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    postedDate: { allowNull: false, type: DataTypes.DATE }
}, { sequelize, createdAt: false, updatedAt: false });

//one order has many orderitems, orderId in OrderItems Table
OrdersModel.hasMany(OrdersItemModel, { foreignKey: 'orderId', as: 'items' });

//one order has only one customer, orderId in Customers Table
OrdersModel.hasOne(CustomersModel, { foreignKey: 'orderId', foreignKeyConstraint: true, as: 'customer' });

//one to one, animalId in OrdersItems table
OrdersItemModel.belongsTo(AnimalsModel, { foreignKeyConstraint: true, foreignKey: 'animalId', targetKey: 'id' });

module.exports = OrdersModel;
