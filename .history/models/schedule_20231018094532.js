'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    schedule.init({
        // id: {
        //   type: DataTypes.STRING,
        //   primaryKey: true
        // },
        email: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        address: DataTypes.STRING,
        gender: DataTypes.BOOLEAN,
        roleid: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'schedule',
    });
    return schedule;
};