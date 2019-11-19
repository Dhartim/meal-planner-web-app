
module.exports = (sequelize, DataTypes) => {
  const Nutrition = sequelize.define('Nutrition', {
    mealId: DataTypes.STRING,
    ingredientId: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    servingSize: DataTypes.STRING,
    totalFat: DataTypes.INTEGER,
    saturatedFat: DataTypes.STRING,
    cholesterol: DataTypes.STRING,
    sodium: DataTypes.STRING,
    totalCarbohydrates: DataTypes.INTEGER,
    fiber: DataTypes.STRING,
    sugar: DataTypes.STRING,
    protein: DataTypes.INTEGER,
    vitaminsAndMinerals: DataTypes.STRING,
  }, {});
  Nutrition.associate = function (models) {
    Nutrition.belongsTo(models.Meal, { foreignKey: 'mealId' });
    Nutrition.belongsTo(models.Ingredient, { foreignKey: 'ingredientId' });
    // associations can be defined here
  };
  return Nutrition;
};
