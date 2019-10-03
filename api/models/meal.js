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
    cuisineId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  }, {});
  Meal.associate = function(models) {
    Meal.belongsTo(models.Cuisine, { foreignKey: 'cuisineId'});
    Meal.hasMany(models.Favorite, { foreignKey: 'mealId' });
    // associations can be defined here
  };
  return Meal;
};