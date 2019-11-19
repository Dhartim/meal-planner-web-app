'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Preferences', [{
        userId: 1,
        diet:"keto",
        calories:"2000",
        fat:"10",
        protein: "30",
        carbs: "20",
        weight: "175",
        desiredWeight: "145",
        mealCount: "3",
        priceLimit: "10",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Preferences', null, {});
  }
};
