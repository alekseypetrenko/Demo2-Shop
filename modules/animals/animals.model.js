const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../db");


class Animal extends Model { };

const AnimalModel = Animal.init({
    id: { primaryKey: true, allowNull: false, autoIncrement: true, type: DataTypes.INTEGER },
    species: { allowNull: false, type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    price: { allowNull: false, type: DataTypes.DECIMAL },
    gender: { type: DataTypes.STRING },
    weight: { type: DataTypes.DECIMAL },
    birth_date: { allowNull: false, type: DataTypes.DATEONLY },
    color: { allowNull: false, type: DataTypes.STRING },
    breed: { allowNull: false, type: DataTypes.STRING },
    is_sterile: { allowNull: false, type: DataTypes.BOOLEAN },
    hair: { allowNull: false, type: DataTypes.STRING },
    createdAt: { allowNull: false, type: DataTypes.DATE },
    updatedAt: { allowNull: false, type: DataTypes.DATE }
}, { sequelize })

module.exports = AnimalModel;