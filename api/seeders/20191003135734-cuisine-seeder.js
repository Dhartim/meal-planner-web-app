'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Cuisine', [
      {
        cuisineType: 'Mexican'
      },
      {
        cuisineType: 'Italian'
      },
      {
        cuisineType: 'American'
      },
      {
        cuisineType: 'French'
      },
      {
        cuisineType: 'Chinese'
      },
      {
        cuisineType: 'Japanese'
      },
      {
        cuisineType: 'Mediterranean'
      },
      {
        cuisineType: 'Indian'
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
