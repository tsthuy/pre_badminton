'use strict';

const { STRING } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('clinic', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER //STRING
            },
            name: {
                type: Sequelize.INTEGER
            },
            address: {
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.TEXT
            },
            image: {
                type: Sequelize.DATE
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('clinic');
    }
};