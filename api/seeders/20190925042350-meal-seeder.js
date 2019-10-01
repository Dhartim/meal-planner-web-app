'use strict';

let faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Meals', [
        {
          dishName: faker.commerce.product(),
          nutritionInfo: faker.lorem.sentence(),
          imgUrl: faker.image.food(),
          prepTime:  `${Math.floor(Math.random() * 30)} min`,
          cookTime: `${Math.floor(Math.random() * 60)} min`,
          recipe: faker.lorem.sentences(),
          cuisineTypeId: Math.floor(Math.random() * 3),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dishName: faker.commerce.product(),
          nutritionInfo: faker.lorem.sentence(),
          imgUrl: faker.image.food(),
          prepTime:  `${Math.floor(Math.random() * 30)} min`,
          cookTime: `${Math.floor(Math.random() * 60)} min`,
          recipe: faker.lorem.sentences(),
          cuisineTypeId: Math.floor(Math.random() * 3),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dishName: faker.commerce.product(),
          nutritionInfo: faker.lorem.sentence(),
          imgUrl: faker.image.food(),
          prepTime:  `${Math.floor(Math.random() * 30)} min`,
          cookTime: `${Math.floor(Math.random() * 60)} min`,
          recipe: faker.lorem.sentences(),
          cuisineTypeId: Math.floor(Math.random() * 3),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dishName: faker.commerce.product(),
          nutritionInfo: faker.lorem.sentence(),
          imgUrl: faker.image.food(),
          prepTime:  `${Math.floor(Math.random() * 30)} min`,
          cookTime: `${Math.floor(Math.random() * 60)} min`,
          recipe: faker.lorem.sentences(),
          cuisineTypeId: Math.floor(Math.random() * 3),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dishName: faker.commerce.product(),
          nutritionInfo: faker.lorem.sentence(),
          imgUrl: faker.image.food(),
          prepTime:  `${Math.floor(Math.random() * 30)} min`,
          cookTime: `${Math.floor(Math.random() * 60)} min`,
          recipe: faker.lorem.sentences(),
          cuisineTypeId: Math.floor(Math.random() * 3),
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
      */
      return queryInterface.bulkDelete('Meals', null, {});
  }
};
