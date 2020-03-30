const { Model, DataTypes } = require('sequelize'); 
const sequelise = require('../../db');
const AnimalModel = require('../animals/animals.model');
const OrderModel = require('../orders/orders.model');

class OrderItem extends Model {

}

const OrderItemModel = OrderItem.init({
    

}, { sequelize});

//create column animalId in OrderItem table (constraint: not null) and connect it with id column in Animal table
OrderItemModel.animal = OrderItemModel.belongsTo(AnimalModel, { foreignKeyConstraint: true, foreignKey: 'animalId', targetKey: 'id'});
AnimalModel.animals = AnimalModel.hasMany(OrderItemModal);

//create column orderId in OrderItem table (constraint: not null) and connect it with id column in Order table
OrderItemModel.order = OrderItemModel.belongsTo(OrderModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id'});
OrderModel.items = OrderModel.hasMany(OrderItemModal);
//??hasOne

module.exports = OrderItemModel;