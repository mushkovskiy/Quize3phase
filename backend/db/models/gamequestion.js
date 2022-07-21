'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GameQuestion.init({
    game_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    isright: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GameQuestion',
  });
  return GameQuestion;
};