'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.createTable("OrderItems", {
            id: {
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },

            idAnumal: {
                allowNull: false,
                type: Sequelize.INTEGER
            },

            idOrder: {
                allowNull: false,
                type: Sequelize.INTEGER
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
    })
        transaction.commit();
    } catch (error) {
        transaction.rollback();
    }
  },

  down: async (queryInterface, Sequelize) => {
      const transaction = await queryInterface.sequelize.transaction();
      try {
          await queryInterface.dropTable("OrderItems");
      } catch (error) {
          transaction.rollback();
      }
  }
};
