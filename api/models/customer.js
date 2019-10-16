'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    userId: DataTypes.INTEGER,
    paid: DataTypes.BOOLEAN,
    customerId: DataTypes.INTEGER,
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Customer;
};