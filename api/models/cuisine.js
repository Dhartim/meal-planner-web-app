'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cuisine = sequelize.define('Cuisines', {
    type: DataTypes.STRING
  }, {});
  Cuisine.associate = function(models) {
    // associations can be defined here
  };
  return Cuisine;
};