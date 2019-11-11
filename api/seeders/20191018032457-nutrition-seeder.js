const { Meal } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let nutritionArray= [];
    const meals = await Meal.findAll();
    
    await meals.forEach((meal)=>{
      nutritionArray.push({
        mealId: meal.id,
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
      })
    })
    return await queryInterface.bulkInsert('Nutrition', nutritionArray)
  },

  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    queryInterface.bulkDelete('Nutrition', null, {}),

};
