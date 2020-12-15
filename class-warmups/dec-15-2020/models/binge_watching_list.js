'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Binge_Watching_List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Binge_Watching_List.init({
    movie: DataTypes.STRING,
    run_time: DataTypes.NUMBER,
    date_to_watch: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Binge_Watching_List',
  });
  return Binge_Watching_List;
};