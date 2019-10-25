
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const recipes = require('../public/Recipes.json');
    let recipesArray = [];
    let len = 3;
    for (let i = 0; i<len; i++){
      recipes.forEach((recipe) => {
        recipesArray.push({
          dishName: recipe.name,
          imgUrl: recipe.imageURL,
          prepTime: `${Math.floor(Math.random() * 30)} min`,
          cookTime: `${Math.floor(Math.random() * 60)} min`,
          recipe: faker.lorem.sentences(),
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
