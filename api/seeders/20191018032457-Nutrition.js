'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
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
      sugars: DataTypes.STRING,
      protein: DataTypes.STRING,
      vitaminsAndMinerals: DataTypes.STRING
      */
      return queryInterface.bulkInsert('Nutrition', [
        {
          mealId: 1,
          calories: 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
