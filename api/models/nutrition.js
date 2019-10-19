'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nutrition = sequelize.define('Nutrition', {
    mealId: DataTypes.INTEGER,
    calories: DataTypes.INTEGER,
    servingSize: DataTypes.STRING,
    totalFat: DataTypes.STRING,
    saturatedFat: DataTypes.STRING,
    cholesterol: DataTypes.STRING,
    sodium: DataTypes.STRING,
    totalCarbohydrates: DataTypes.STRING,
    fiber: DataTypes.STRING,
    sugars: DataTypes.STRING,
    protein: DataTypes.STRING,
    vitaminsAndMinerals: DataTypes.STRING
  }, {});
  Nutrition.associate = function(models) {
    Nutrition.belongsTo(models.Meals, { foreignKey: 'mealId' })
    // associations can be defined here
  };
  return Nutrition;
};