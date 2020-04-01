'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const transaction = await queryInterface.sequelize.transaction();
		try {
			await queryInterface.createTable("Customers", {
				id: {
					primaryKey: true,
					autoIncrement: true,
					allowNull: false,
					type: Sequelize.INTEGER
				},
				name: {
					type: Sequelize.STRING,
					allowNull: false
				},
				email: {
					type: Sequelize.STRING,
					allowNull: false
				},
				phone: {
					type: Sequelize.STRING,
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
			await queryInterface.dropTable("Customers");
		} catch (error) {
			transaction.rollback();
		}
	}
};


