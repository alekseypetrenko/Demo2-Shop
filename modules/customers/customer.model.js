const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');

class Customer extends Model { }

const CustomersModel = Customer.init({
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    name: { allowNull: false, type: DataTypes.STRING },
    email: { allowNull: false, type: DataTypes.STRING },
    phone: { allowNull: false, type: DataTypes.STRING },
    orderId: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, createdAt: false, updatedAt: false });

module.exports = CustomersModel;