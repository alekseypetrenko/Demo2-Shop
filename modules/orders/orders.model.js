const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../../db');
const OrdersItemModel = require('./order.item.model');
const CustomersModel = require('../customers/customer.model');
const AnimalsModel = require('../animals/animals.model');

class Order extends Model {}

const OrdersModel = Order.init({
    id: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
    userName: {allowNull: false , type: DataTypes.STRING},
    userEmail: {allowNull: false , type: DataTypes.STRING},
    userPhoneNumber: {allowNull: false , type: DataTypes.DECIMAL},
    productCart: {allowNull: false , type: DataTypes.STRING},
    totalPrice: {allowNull: false , type: DataTypes.DECIMAL},
    postedDate: {allowNull: false, type: DataTypes.DATE}
}, { sequelize});

OrdersModel.items = OrdersModel.hasMany(OrdersItemModel);
OrdersModel.customer = OrdersModel.hasOne(CustomersModel, { foreignKey: 'customerId', foreignKeyConstraint: true });

OrdersItemModel.pet = OrdersItemModel.belongsTo(AnimalsModel, { foreignKeyConstraint: true, foreignKey: 'petId', targetKey: 'id' });
OrdersItemModel.order = OrdersItemModel.belongsTo(OrdersModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id' });


module.exports = OrdersModel;
