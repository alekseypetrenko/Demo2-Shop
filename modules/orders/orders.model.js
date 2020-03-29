const { Model, DataTypes } = require('sequelize'); 
const sequelise = require('../../db');

class Order extends Model {

}

const OrderModel = Order.init({
    id: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
    postedDate: {allowNull: false, type: DataTypes.DATE}
}, { sequelize});