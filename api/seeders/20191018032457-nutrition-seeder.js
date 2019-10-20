
module.exports = {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      mealId: DataTypes.INTEGER,
      calories: DataTypes.INTEGER,
      servingSize: DataTypes.STRING,
      totalFat: DataTypes.STRING,
      saturatedFat: DataTypes.STRING,
      cholesterol: DataTypes.STRING,
      sodium: DataTypes.STRING,
      totalCarbohydrates: DataTypes.STRING,
      fiber: DataTypes.STRING,
      sugar: DataTypes.STRING,
      protein: DataTypes.STRING,
      vitaminsAndMinerals: DataTypes.STRING
      */
    queryInterface.bulkInsert('Nutrition', [

      {
        mealId: 1,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 2,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 3,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 4,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 5,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 6,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 7,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 8,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 9,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 10,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 11,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 12,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
      {
        mealId: 13,
        servingSize: `${Math.floor(Math.random() * 1000)} grams`,
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
      },
    ], {}),

  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    queryInterface.bulkDelete('Nutrition', null, {}),

};
