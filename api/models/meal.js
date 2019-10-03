'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    dishName: {
      type: DataTypes.STRING
    },
    nutritionInfo: {
      type: DataTypes.STRING
    },
    imgUrl: {
      type: DataTypes.STRING
    },
    prepTime: {
      type: DataTypes.STRING
    },
    cookTime: {
      type: DataTypes.STRING
    },
    recipe: {
      type: DataTypes.STRING
    },
    cuisineTypeId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  }, {});
  Meal.associate = function(models) {
    Meal.belongsTo(models.Cuisine, { foreignKey: 'cuisineTypeId'})
  };
  return Meal;
};