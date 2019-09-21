const bcrypt = require('bcrypt');
const saltRounds = 10;

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
			allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
			allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
			unique: true,
			allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
			allowNull: false,
    },
  }, {
    hooks: {
			//hook that will hash the password before creating the User and storing it into the database
			beforeCreate: (user, options) => {
				return bcrypt.hash(user.password, saltRounds)
				.then(hash => {
					user.password = hash;
				})
				.catch(error => {
					throw error;
				})
			}
		},
  });
  User.associate = models => {
    // associations can be defined here
    // User.hasMany(models.Todo, {
    //   foreignKey: 'userId',     // foreignKey is this models key
    //   as: 'todos'
    // })
  };
  return User;
};