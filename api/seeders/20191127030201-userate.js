'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     */
      return queryInterface.bulkInsert('UserAtes', [
      {
        userId: 1,
        mealId: 1,
        createdAt: new Date("11/22/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 2,
        createdAt: new Date("11/22/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 3,
        createdAt: new Date("11/23/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 4,
        createdAt: new Date("11/24/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 5,
        createdAt: new Date("11/25/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 4,
        createdAt: new Date("11/26/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 3,
        createdAt: new Date("11/27/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 2,
        createdAt: new Date("11/28/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 1,
        createdAt: new Date("11/29/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 2,
        createdAt: new Date("11/30/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 4,
        createdAt: new Date("11/30/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 2,
        createdAt: new Date("11/22/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 2,
        createdAt: new Date("11/23/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 2,
        createdAt: new Date("11/24/2019"),
        updatedAt: new Date()
      },
      {
        userId: 1,
        mealId: 2,
        createdAt: new Date("11/25/2019"),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      
      Example:
     */
      return queryInterface.bulkDelete('UserAtes', null, {});
  }
};
