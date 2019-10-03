'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Cuisines', [
      {
        cuisineType: 'Mexican',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Italian',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'American',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'French',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Chinese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Japanese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Mediterranean',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Indian',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      // return queryInterface.bulkDelete('Cuisine', null, {});
  }
};
