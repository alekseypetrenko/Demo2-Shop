'use strict';
const { animals } = require("../data/animalsData")

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Animals", animals, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Animals", null, {});
    }
};
