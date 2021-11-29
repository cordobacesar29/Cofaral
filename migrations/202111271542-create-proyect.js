'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Products', {
			id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
			sapcode: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			presentation: {
				type: Sequelize.STRING,
			},
			laboratorio: {
				type: Sequelize.INTEGER,
			},
			droga: {
				type: Sequelize.INTEGER,
			},
			tucuman: {
				type: Sequelize.INTEGER,
			},
			salta: {
				type: Sequelize.INTEGER,
			},
			chaco: {
				type: Sequelize.INTEGER,
			},
			precio: {
				type: Sequelize.INTEGER,
			},
      createdAt: {
				allowNull: false,
        type: Sequelize.DATE,
      },
			deletedAt: {
				type: Sequelize.DATE,
			},
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Products');
	},
};