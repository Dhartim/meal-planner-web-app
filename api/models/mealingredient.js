'use strict';
module.exports = (sequelize, DataTypes) => {
  const MealIngredient = sequelize.define('MealIngredient', {
    ingredientId: DataTypes.INTEGER,
    mealId: DataTypes.INTEGER
  }, {});
  MealIngredient.associate = function(models) {
    MealIngredient.belongsTo(models.Meal, { foreignKey: 'mealId' })
    MealIngredient.belongsTo(models.Ingredient, { foreignKey: 'mealId' })
    

    // associations can be defined here
  };
  return MealIngredient;
};