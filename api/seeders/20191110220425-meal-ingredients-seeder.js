
const { Meal, Ingredient } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const recipes = require('../public/Recipes.json');
    const mealIngredientArray = [];

    const meals = await Meal.findAll();
    const mealsTable = {};
    await meals.forEach((meal) => {
      mealsTable[meal.dishName] = meal.id;
    });
    const ingredients = await Ingredient.findAll();
    const ingredientsTable = {};
    await ingredients.forEach((ingredient) => {
      ingredientsTable[ingredient.name] = ingredient.id;
    });

    await recipes.forEach((recipe) => {
      const mealId = mealsTable[recipe.name];
      recipe.ingredients.forEach((ingredient) => {
        const ingredientId = ingredientsTable[ingredient.name];
        mealIngredientArray.push({
          mealId,
          ingredientId,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    });

    return await queryInterface.bulkInsert('MealIngredients', mealIngredientArray);
  },

  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    queryInterface.bulkDelete('MealIngredients', null, {}),

};
