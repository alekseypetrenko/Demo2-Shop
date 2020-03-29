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

//create column orderId in OrderItem table (constraint: not null) and connect it with id column in Order table
OrderItemModel.order = OrderItemModel.belongsTo(OrderModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id'});

module.exports = OrderItemModel;