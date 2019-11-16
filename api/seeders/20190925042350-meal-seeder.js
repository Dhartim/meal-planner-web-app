
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const recipes = require('../public/Recipes.json');
    const diets = ['Vegetarian', 'Vegan', 'Keto', 'Paleo', 'Low-Fat']
    let recipesArray = [];
    let len = 3;
    for (let i = 0; i<len; i++){
      recipes.forEach((recipe) => {
        recipesArray.push({
          dishName: recipe.name,
          imgUrl: recipe.imageURL,
          prepTime: `${Math.floor(Math.random() * 30)} min`,
          cookTime: `${Math.floor(Math.random() * 60)} min`,
          recipe: recipe.steps.join(" "),
          cuisineId: recipe.cuisineId,
          price: faker.commerce.price(),
          dietType: diets[Math.floor(Math.random() * diets.length)],
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      });
    }
    return queryInterface.bulkInsert('Meals', recipesArray)
  },

  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    queryInterface.bulkDelete('Meals', null, {}),

};
