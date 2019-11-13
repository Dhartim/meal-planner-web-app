'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const recipes = require('../public/Recipes.json');
    
    let ingredientMap = {};
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach(ingredient => {
        if ( ingredientMap[ingredient.name] === undefined ) {
          ingredientMap[ingredient.name] = ingredient
          // ingredientMap["price"] = faker.commerce.price(),
          // ingredientMap["quantity"] = "100 g"
          ingredientMap[ingredient.name]["createdAt"] = new Date()
          ingredientMap[ingredient.name]["updatedAt"] = new Date()
        }
      })
    });
    
    let ingredientsArray = [...Object.values(ingredientMap) ]
    return queryInterface.bulkInsert('Ingredients', ingredientsArray)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Ingredients', null, {});
  }
};
