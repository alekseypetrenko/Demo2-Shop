const { Model, DataTypes } = require('sequelize'); 
const sequelise = require('../../db');
const OrderItemModal = require('./order.item.model');

class Order extends Model {

}

const OrderModel = Order.init({
    id: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
    postedDate: {allowNull: false, type: DataTypes.DATE}
}, { sequelize});

//array of orders
OrderModel.items = OrderModel.hasMany(OrderItemModal);
//OrderItemModel.animal = OrderItemModel.belongsTo(AnimalModel, { foreignKeyConstraint: true, foreignKey: 'animalId', targetKey: 'id'});

module.exports = OrderModel;
