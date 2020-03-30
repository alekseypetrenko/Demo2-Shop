const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../../db');
const AnimalsModel = require('../animals/animals.model');
const OrdersModel = require('../orders/orders.model');

class OrdersItem extends Model {}

const OrdersItemModel = OrdersItem.init({
}, {sequelize});

//create column animalId in OrderItem table (constraint: not null) and connect it with id column in Animal table
// OrderItemModel.animal = OrderItemModel.belongsTo(AnimalModel, { foreignKeyConstraint: true, foreignKey: 'animalId', targetKey: 'id'});
// AnimalModel.animals = AnimalModel.hasMany(OrderItemModel);

//create column orderId in OrderItem table (constraint: not null) and connect it with id column in Order table
// OrderItemModel.order = OrderItemModel.belongsTo(OrderModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id'});
// OrderModel.items = OrderModel.hasMany(OrderItemModel);
//??hasOne

module.exports = OrdersItemModel;