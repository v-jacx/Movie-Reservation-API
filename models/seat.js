'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seat.init({
    number: DataTypes.CHAR(100)
  }, {
    sequelize,
    modelName: 'Seat',
    tableName: 'seats'
  });
  return Seat;
};