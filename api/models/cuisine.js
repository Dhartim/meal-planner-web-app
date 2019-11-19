
module.exports = (sequelize, DataTypes) => {
  const Cuisine = sequelize.define('Cuisine', {
    cuisineType: DataTypes.STRING,
  }, {});
  Cuisine.associate = function (models) {
    Cuisine.hasMany(models.Meal, {
      foreignKey: 'cuisineId',
    });
  };
  return Cuisine;
};
