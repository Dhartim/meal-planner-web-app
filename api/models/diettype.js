'use strict';
module.exports = (sequelize, DataTypes) => {
  const DietType = sequelize.define('DietType', {
    type: DataTypes.STRING
  }, {});
  DietType.associate = function(models) {
    // associations can be defined here
  };
  return DietType;
};