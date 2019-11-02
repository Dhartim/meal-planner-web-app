'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    quantity: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {});
  Ingredient.associate = function(models) {
    Ingredient.hasOne(models.Nutrition, { foreignKey: "ingredientId"})
    Ingredient.hasMany(models.MealIngredient, { foreignKey: 'ingredientId'});

    // associations can be defined here
  };
  return Ingredient;
};