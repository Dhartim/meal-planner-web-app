
module.exports = (sequelize, DataTypes) => {
  const Recommendation = sequelize.define('Recommendation', {
    userId: DataTypes.INTEGER,
    mealId: DataTypes.INTEGER,
  }, {});
  Recommendation.associate = function (models) {
    Recommendation.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    Recommendation.belongsTo(models.Meal, {
      foreignKey: 'mealId',
      onDelete: 'CASCADE',
    });
    // associations can be defined here
  };
  return Recommendation;
};
