const Sequelize = require("sequelize");
const db = require("../../db");

const Animal = db.define("animals", {
    id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    species: {type: Sequelize.STRING,allowNull: false},
    name: {type: Sequelize.STRING},
    price: {type: Sequelize.INTEGER, allowNull: false},
    gender: {type: Sequelize.STRING},
    image: {type: Sequelize.STRING, allowNull: true},
    weight: {type: Sequelize.STRING},
    birth_date: {type: Sequelize.DATE},
    color: {type: Sequelize.STRING},
    breed: {type: Sequelize.STRING},
    is_sterile: {type: Sequelize.BOOLEAN},
    hair: {type: Sequelize.STRING}
})

module.exports = Animal;