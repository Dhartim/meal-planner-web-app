'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    queryInterface.bulkInsert('MealIngredients', [
      {
        ingredientId: 1,
        mealId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 2,
        mealId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 3,
        mealId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 4,
        mealId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 5,
        mealId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 1,
        mealId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 2,
        mealId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 3,
        mealId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 4,
        mealId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 5,
        mealId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 6,
        mealId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 8,
        mealId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientId: 7,
        mealId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('MealIngredients', null, {});
  }
};