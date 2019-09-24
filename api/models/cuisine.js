'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cuisine = sequelize.define('Cuisine', {
    type: DataTypes.STRING
  }, {});
  Cuisine.associate = function(models) {
    // associations can be defined here
  };
  return Cuisine;
};