'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const transaction = await queryInterface.sequelize.transaction();
		try {
			await queryInterface.createTable("Animals", {
				id: {
					primaryKey: true,
					allowNull: false,
					autoIncrement: true,
					type: Sequelize.INTEGER
				},
				species: {
					allowNull: false,
					type: Sequelize.STRING
				},
				name: {
					type: Sequelize.STRING
				},
				image: {
					type: Sequelize.STRING
				},
				price: {
					allowNull: false,
					type: Sequelize.DECIMAL
				},
				gender: {
					type: Sequelize.STRING
				},
				weight: {
					type: Sequelize.DECIMAL
				},
				birth_date: {
					allowNull: false,
					type: Sequelize.BIGINT
				},
				color: {
					allowNull: false,
					type: Sequelize.STRING
				},
				breed: {
					allowNull: false,
					type: Sequelize.STRING
				},
				is_sterile: {
					allowNull: true,
					type: Sequelize.BOOLEAN
				},
				hair: {
					allowNull: true,
					type: Sequelize.STRING
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
			await queryInterface.dropTable("Animals");
		} catch (error) {
			transaction.rollback();
		}
	}
};
