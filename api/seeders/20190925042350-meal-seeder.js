const { Cuisine } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const recipes = require('../public/epicurious_recipes.json');
    const diets = ['Vegetarian', 'Vegan', 'Keto', 'Paleo', 'Low-Fat'];
    const prices = [5, 10, 15, 20];

    const cuisines = await Cuisine.findAll();

    const recipesArray = [];
    const nutritionArray = [];

    await recipes.forEach((recipe, index) => {
      let cuisineId = 1;

      for (let i = 0; i < cuisines.length; i++) {
        if (cuisines[i].cuisineType === recipe.category) {
          cuisineId = cuisines[i].id;
          break;
        }
      }

      recipesArray.push({
        id: index + 1,
        dishName: recipe.name,
        imgUrl: recipe.imageURL,
        prepTime: `${Math.floor(Math.random() * 30)} min`,
        cookTime: `${Math.floor(Math.random() * 60)} min`,
        recipe: recipe.steps,
        desc: recipe.desc,
        cuisineId,
        price: prices[Math.floor(Math.random() * prices.length)],
        dietType: diets[Math.floor(Math.random() * diets.length)],
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const { nutrition } = recipe;

      if (nutrition) {
        nutritionArray.push({
          mealId: index + 1,
          servingSize: `${Math.floor(Math.random() * 1000)} g`,
          calories: `${nutrition.Calories} cal`,
          totalFat: `${nutrition.Fat}`,
          saturatedFat: `${nutrition['Saturated Fat']}`,
          cholesterol: `${nutrition.Cholesterol}`,
          sodium: `${nutrition.Sodium}`,
          totalCarbohydrates: `${nutrition.Carbohydrates}`,
          fiber: `${nutrition.Fiber}`,
          sugar: `${nutrition.Fiber}`,
          protein: `${nutrition.Protein}`,
          vitaminsAndMinerals: `vitamin C ${Math.floor(Math.random() * 100)} mg, calcium ${Math.floor(Math.random() * 100)} mg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      } else {
        nutritionArray.push({
          mealId: index + 1,
          servingSize: `${Math.floor(Math.random() * 1000)} g`,
          calories: `${Math.floor(Math.random() * 1000)} cal`,
          totalFat: `${Math.floor(Math.random() * 20)} g`,
          saturatedFat: `${Math.floor(Math.random() * 10)} g`,
          cholesterol: `${Math.floor(Math.random() * 20)} mg`,
          sodium: `${Math.floor(Math.random() * 1000)} mg`,
          totalCarbohydrates: `${Math.floor(Math.random() * 100)} g`,
          fiber: `${Math.floor(Math.random() * 20)} g`,
          sugar: `${Math.floor(Math.random() * 80)} g`,
          protein: `${Math.floor(Math.random() * 60)} g`,
          vitaminsAndMinerals: `vitamin C ${Math.floor(Math.random() * 100)} mg, calcium ${Math.floor(Math.random() * 100)} mg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    });

    await queryInterface.bulkInsert('Meals', recipesArray);
    await queryInterface.bulkInsert('Nutrition', nutritionArray);
  },

  down: async (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    await queryInterface.bulkDelete('Meals', null, {}),
};
