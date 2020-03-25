
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('MealIngredients', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    ingredientId: {
      type: Sequelize.INTEGER,
    },
    mealId: {
      type: Sequelize.INTEGER,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('MealIngredients'),
};
