'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: DataTypes.INTEGER,
    mealId: DataTypes.INTEGER
  }, {});
  Favorite.associate = function(models) {
    Favorite.belongsTo(models.User, { foreignKey: 'userId'})
    Favorite.belongsTo(models.Meal, { foreignKey: 'mealId'})
    // associations can be defined here
  };
  return Favorite;
};