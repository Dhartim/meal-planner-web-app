'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Nutrition', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mealId: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      calories: {
        type: Sequelize.INTEGER
      },
      servingSize: {
        type: Sequelize.STRING
      },
      totalFat: {
        type: Sequelize.STRING
      },
      saturatedFat: {
        type: Sequelize.STRING
      },
      cholesterol: {
        type: Sequelize.STRING
      },
      sodium: {
        type: Sequelize.STRING
      },
      totalCarbohydrates: {
        type: Sequelize.STRING
      },
      fiber: {
        type: Sequelize.STRING
      },
      sugars: {
        type: Sequelize.STRING
      },
      protein: {
        type: Sequelize.STRING
      },
      vitaminsAndMinerals: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Nutrition');
  }
};