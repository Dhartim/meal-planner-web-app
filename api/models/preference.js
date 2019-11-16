module.exports = (sequelize, DataTypes) => {
    const Preferences = sequelize.define('UserMacro', {
        userId: {type: DataTypes.INTEGER, primaryKey: true},
        diet: DataTypes.STRING,
        calories: DataTypes.INTEGER,
        fat: DataTypes.INTEGER,
        protein: DataTypes.INTEGER,
        carbs: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        desiredWeight: DataTypes.INTEGER,
        mealCount: DataTypes.INTEGER,
        priceLimit: DataTypes.INTEGER
    }, {});
    Preferences.associate = function (models) {
        Preferences.belongsTo(models.User, { foreignKey: 'userId'})
    };
    return Preferences;
}