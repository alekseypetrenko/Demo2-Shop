'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const transaction = await queryInterface.sequelize.transaction();
          try {
              await queryInterface.createTable("Orders", {
                  id: {
                      primaryKey: true,
                      allowNull: false,
                      autoIncrement: true,
                      type: Sequelize.INTEGER
                  },

                  userName: {
                      allowNull: false,
                      type: Sequelize.STRING
                  },

                  userEmail: {
                      allowNull: false,
                      type: Sequelize.STRING
                  },

                  userPhoneNumber: {
                      allowNull: false,
                      type: Sequelize.DECIMAL
                  },

                  productCart: {
                      allowNull: false,
                      type: Sequelize.STRING
                  },

                  totalPrice: {
                    allowNull: false,
                    type: Sequelize.DECIMAL
                  },

                  postedDate: {
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
          await queryInterface.dropTable("Orders");
      } catch (error) {
          transaction.rollback();
      }
  }
};
