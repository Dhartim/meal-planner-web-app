
module.exports = (sequelize, DataTypes) => {
  const Nutrition = sequelize.define('Nutrition', {
    mealId: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    servingSize: DataTypes.STRING,
    totalFat: DataTypes.STRING,
    saturatedFat: DataTypes.STRING,
    cholesterol: DataTypes.STRING,
    sodium: DataTypes.STRING,
    totalCarbohydrates: DataTypes.STRING,
    fiber: DataTypes.STRING,
    sugar: DataTypes.STRING,
    protein: DataTypes.STRING,
    vitaminsAndMinerals: DataTypes.STRING,
  }, {});
  Nutrition.associate = function (models) {
    Nutrition.belongsTo(models.Meal, { foreignKey: 'mealId' });
    // associations can be defined here
  };
  return Nutrition;
};
