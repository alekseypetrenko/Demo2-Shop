'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.addColumn('Animals', 'sold', { type: Sequelize.BOOLEAN });
        transaction.commit();
    } catch (error) {
        transaction.rollback();
    }
},

down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('Animals', 'sold');
    } catch (error) {
        transaction.rollback();
    }
}
};
