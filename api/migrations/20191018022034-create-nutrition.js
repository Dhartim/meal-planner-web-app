
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Nutrition', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    mealId: {
      type: Sequelize.INTEGER,
      unique: true,
    },
    calories: {
      type: Sequelize.INTEGER,
    },
    servingSize: {
      type: Sequelize.STRING,
    },
    totalFat: {
      type: Sequelize.INTEGER,
    },
    saturatedFat: {
      type: Sequelize.STRING,
    },
    cholesterol: {
      type: Sequelize.STRING,
    },
    sodium: {
      type: Sequelize.STRING,
    },
    totalCarbohydrates: {
      type: Sequelize.INTEGER,
    },
    fiber: {
      type: Sequelize.STRING,
    },
    sugar: {
      type: Sequelize.STRING,
    },
    protein: {
      type: Sequelize.INTEGER,
    },
    vitaminsAndMinerals: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Nutrition'),
};
