const db = require("../../db");
const { DataType, Model } = require("sequelize");

class Animal extends Model { };

const AnimalModel = Anmal.init({
    id: { primaryKey: true, allowNull: false, autoIncrement: true, type: DataType.INTEGER },
    species: { allowNull: false, type: DataType.STRING },
    name: { type: DataType.STRING },
    image: { type: DataType.STRING },
    price: { allowNull: false, type: DataType.INTEGER },
    gender: { type: DataType.STRING },
    weight: { type: DataType.INTEGER },
    birth_date: { allowNull: false, type: DataType.DATEONLY },
    color: { allowNull: false, type: DataType.STRING },
    breed: { allowNull: false, type: DataType.STRING },
    is_sterile: { allowNull: false, type: DataType.BOOLEAN },
    hair: { allowNull: false, type: DataType.STRING },
    createdAt: { allowNull: false, type: DataType.DATE },
    updatedAt: { allowNull: false, type: DataType.DATE }
})

module.exports = AnimalModel;