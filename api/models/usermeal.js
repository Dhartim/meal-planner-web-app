'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserMeal = sequelize.define('UserMeal', {
    userId: DataTypes.INTEGER,
    mealId: DataTypes.INTEGER
  }, {});
  UserMeal.associate = function(models) {
    // associations can be defined here
    UserMeal.belongsTo(models.User, { foreignKey: 'userId' });
    UserMeal.belongsTo(models.Meal, { foreignKey: 'mealId' });
  };
  return UserMeal;
};