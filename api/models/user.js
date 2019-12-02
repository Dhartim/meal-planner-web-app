const validator = require('validator');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
      lowercase: true,

      validate: (value) => {
        if (!validator.isEmail(value)) {
          throw new Error({ error: 'Invalid Email address' });
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      minLength: 7,
    },
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Favorite, { foreignKey: 'userId' });
    User.hasMany(models.UserMeal, { foreignKey: 'userId' });
    User.hasMany(models.UserAte, { foreignKey: 'userId' });
    User.hasOne(models.Customer, { foreignKey: 'userId' });
    User.hasOne(models.Preference, { foreignKey: 'userId' })
    // associations can be defined here
  };
  return User;
};
