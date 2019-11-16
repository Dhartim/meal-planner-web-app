'use strict';
const { Meal, Ingredient } = require('../models');

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
  // up: async (queryInterface, Sequelize) => {
  //   const recipes = require('../public/Recipes.json');
  //   console.log("recipes=%s", recipes);
  //   const mealIngredientArray = [];
    
  //   const results = async () => {
  //     let i = 0;
  //     await recipes.forEach(recipe => {
  //       console.log("recipe=%s, i=%d", recipe, i);
  //       i++;
        
  //       return Meal.findOne({
  //         where:{
  //           dishName: recipe.name
  //         }
  //       })
  //       .then(meal => {
  //         console.log('mealId: --', meal.id);
  //         recipe.ingredients.forEach(ingredient => {
  //           return Ingredient.findOne({
  //             where:{
  //               name: ingredient.name,
  //               quantity: ingredient.quantity
  //             }
  //           })
  //           .then(ingredient => {
  //             console.log('ingredientId: --', ingredient);
  //             mealIngredientArray.push(
  //               {
  //                 ingredientId: ingredient.id,
  //                 mealId: meal.id,
  //                 createdAt: new Date(),
  //                 updatedAt: new Date(),
  //               }
  //             );
  //           })
  //           .catch(err => {
  //             console.log("seeding error=%s", err);
  //           })
  //         })
  //       })
  //       .catch(err => {
  //         console.log("error=%s", err);
  //       })
  //     })

  //     return queryInterface.bulkInsert('MealIngredients', mealIngredientArray);
  //   }

  //   return results;
  // },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('MealIngredients', null, {});
  }
};