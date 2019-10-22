
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    userId: DataTypes.INTEGER,
    expiresAt: DataTypes.DATE,
  }, {});
  Customer.associate = function (models) {
    // associations can be defined here
    Customer.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Customer;
};
