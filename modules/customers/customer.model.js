const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../../db');

class Customer extends Model {}

const CustomersModel = Customer.init({
    id: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
    userName: {allowNull: false , type: DataTypes.STRING},
    userEmail: {allowNull: false , type: DataTypes.STRING},
    userPhoneNumber: {allowNull: false , type: DataTypes.STRING},
    orderId: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize});

module.exports = CustomersModel;