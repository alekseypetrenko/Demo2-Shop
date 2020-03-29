const { Model, DataTypes } = require('sequelize'); 
const sequelise = require('../../db');

class OrderItem extends Model {

}

const OrderItemModel = OrderItem.init({
    
    
}, { sequelize});

OrderItemModel.animal = OrderItemModel