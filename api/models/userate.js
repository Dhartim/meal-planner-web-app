
module.exports = (sequelize, DataTypes) => {
  const UserAte = sequelize.define('UserAte', {
    userId: DataTypes.INTEGER,
    mealId: DataTypes.INTEGER,
  }, {});
  UserAte.associate = function (models) {
    // associations can be defined here
    UserAte.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    UserAte.belongsTo(models.Meal, {
      foreignKey: 'mealId',
      onDelete: 'CASCADE',
    });
  };
  return UserAte;
};
