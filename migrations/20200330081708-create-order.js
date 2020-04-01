'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const transaction = await queryInterface.sequelize.transaction();
		try {
			await queryInterface.createTable("Orders", {
				id: {
					primaryKey: true,
					autoIncrement: true,
					type: Sequelize.INTEGER
				},
				postedDate: {
					allowNull: false,
					type: Sequelize.DATE
				},
				customerId: {
					type: Sequelize.INTEGER,
					references: {
						model: {
							tableName: 'Customers',
							key: 'id',
						},
					},
					onDelete: 'cascade',
					allowNull: false,
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
