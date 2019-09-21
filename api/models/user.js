'use strict';
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      unique: true,
      lowercase: true,

      validate: value => {
          if (!validator.isEmail(value)) {
              throw new Error({error: 'Invalid Email address'})
          }
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      minLength: 7
    },
    tokens: [{
      token: {
          type: String,
          required: true
      }
  }]
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};