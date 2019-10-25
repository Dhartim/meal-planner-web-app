
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Meals', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    dishName: {
      type: Sequelize.STRING,
    },
    nutritionInfo: {
      type: Sequelize.STRING,
    },
    imgUrl: {
      type: Sequelize.STRING,
    },
    prepTime: {
      type: Sequelize.STRING,
    },
    cookTime: {
      type: Sequelize.STRING,
    },
    recipe: {
      type: Sequelize.TEXT,
    },
    cuisineId: {
      type: Sequelize.INTEGER,
      foreignKey: true,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Meals'),
};
