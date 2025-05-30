'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule.init({
    date: DataTypes.DATEONLY,
    start: DataTypes.TIME,
    end: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Schedule',
    tableName: 'schedules'
  });
  return Schedule;
};