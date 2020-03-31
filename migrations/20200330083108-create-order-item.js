'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.createTable("OrdersItems", {
            animalId: {
                type: Sequelize.INTEGER,
                references: {
                  model: {
                    tableName: 'Animals',
                    key: 'id',
                  },
                },
                allowNull: false
              },
              orderId: {
                type: Sequelize.INTEGER,
                references: {
                  model: {
                    tableName: 'Orders',
                    key: 'id',
                  },
                },
                allowNull: false
              },
        })
        transaction.commit();
    } catch (error) {
        transaction.rollback();
    }
  },

  down: async (queryInterface, Sequelize) => {
      const transaction = await queryInterface.sequelize.transaction();
      try {
          await queryInterface.dropTable("OrdersItems");
      } catch (error) {
          transaction.rollback();
      }
  }
};
