'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Holiday_Shopping_List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Holiday_Shopping_List.init({
    recipient: DataTypes.STRING,
    wish_list: DataTypes.STRING,
    max_cost: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Holiday_Shopping_List',
  });
  return Holiday_Shopping_List;
};