module.exports = (sequelize, DataTypes) => {
    const Preference = sequelize.define('Preference', {
        userId: {type: DataTypes.INTEGER, primaryKey: true},
        diet: DataTypes.STRING,
        calories: DataTypes.INTEGER,
        fat: DataTypes.INTEGER,
        protein: DataTypes.INTEGER,
        carbs: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        desiredWeight: DataTypes.INTEGER,
        mealCount: DataTypes.INTEGER,
        priceLimit: DataTypes.INTEGER,
    }, {});
    Preference.associate = function (models) {
        Preference.belongsTo(models.User, { foreignKey: 'userId'})
    };
    return Preference;
}