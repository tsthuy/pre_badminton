'use strict';

const { STRING } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('booking', {
            //     statusId: DataTypes.INTEGER,
            // doctorId: DataTypes.INTEGER,
            // patientId: DataTypes.INTEGER,
            // date: DataTypes.DATE,
            // timeType: DataTypes.STRING,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER //STRING
            },
            statusId: {
                type: Sequelize.STRING
            },
            doctorId: {
                type: Sequelize.STRING
            },
            patientId: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.STRING
            },
            timeType: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('booking');
    }
};