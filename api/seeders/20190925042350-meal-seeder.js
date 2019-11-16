
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const recipes = require('../public/epicurious_recipes.json');
    let recipesArray = [];
    let len = 1;
    for (let i = 0; i<len; i++){
      recipes.forEach((recipe) => {
        recipesArray.push({
          dishName: recipe.name,
          imgUrl: recipe.imageURL,
          prepTime: `${Math.floor(Math.random() * 30)} min`,
          cookTime: `${Math.floor(Math.random() * 60)} min`,
          recipe: recipe.steps,
          desc: recipe.desc,
          cuisineId: recipe.cuisineId,
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
