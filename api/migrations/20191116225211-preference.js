'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Preferences', {
    userId: {type: Sequelize.INTEGER, primaryKey: true,},
    diet: {type: Sequelize.STRING,},
    calories: {type: Sequelize.INTEGER,},
    fat: {type: Sequelize.INTEGER,},
    protein: {type: Sequelize.INTEGER,},
    carbs: {type: Sequelize.INTEGER,},
    weight: {type: Sequelize.INTEGER,},
    desiredWeight: {type: Sequelize.INTEGER,},
    mealCount: {type: Sequelize.INTEGER,},
    priceLimit: {type: Sequelize.INTEGER,},
    createdAt: {allowNull: false, type: Sequelize.DATE,},
    updatedAt: {allowNull: false, type: Sequelize.DATE,},
}),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Preferences'),
};
