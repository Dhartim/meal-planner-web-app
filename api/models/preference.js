module.exports = (sequelize, DataTypes => {
    const Preferences = sequelize.define('UserMacro', {
        userId: {type: DataTypes.INTEGER, primaryKey: true},
        calories: DataTypes.INTEGER,
        fat: DataTypes.INTEGER,
        protein: DataTypes.INTEGER,
        carbs: DataTypes.INTEGER,
        currentWeight: DataTypes.INTEGER,
        desiredWeight: DataTypes.INTEGER
    }, {});
    Preferences.associate = function (models) {
        Preferences.belongsTo(models.User, { foreignKey: 'userId'})
    };
    return Preferences;
})