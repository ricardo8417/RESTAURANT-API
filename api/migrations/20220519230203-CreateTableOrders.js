'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('orders', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            menuId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'menus',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            quantity: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('orders');
    }
};