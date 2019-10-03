
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Meals', [
    {
      dishName: faker.commerce.product(),
      nutritionInfo: faker.lorem.sentence(),
      imgUrl: faker.image.food(),
      prepTime: `${Math.floor(Math.random() * 30)} min`,
      cookTime: `${Math.floor(Math.random() * 60)} min`,
      recipe: faker.lorem.sentences(),
      cuisineId: Math.floor(Math.random() * 8),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dishName: faker.commerce.product(),
      nutritionInfo: faker.lorem.sentence(),
      imgUrl: faker.image.food(),
      prepTime: `${Math.floor(Math.random() * 30)} min`,
      cookTime: `${Math.floor(Math.random() * 60)} min`,
      recipe: faker.lorem.sentences(),
      cuisineId: Math.floor(Math.random() * 8),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dishName: faker.commerce.product(),
      nutritionInfo: faker.lorem.sentence(),
      imgUrl: faker.image.food(),
      prepTime: `${Math.floor(Math.random() * 30)} min`,
      cookTime: `${Math.floor(Math.random() * 60)} min`,
      recipe: faker.lorem.sentences(),
      cuisineId: Math.floor(Math.random() * 8),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dishName: faker.commerce.product(),
      nutritionInfo: faker.lorem.sentence(),
      imgUrl: faker.image.food(),
      prepTime: `${Math.floor(Math.random() * 30)} min`,
      cookTime: `${Math.floor(Math.random() * 60)} min`,
      recipe: faker.lorem.sentences(),
      cuisineId: Math.floor(Math.random() * 8),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dishName: faker.commerce.product(),
      nutritionInfo: faker.lorem.sentence(),
      imgUrl: faker.image.food(),
      prepTime: `${Math.floor(Math.random() * 30)} min`,
      cookTime: `${Math.floor(Math.random() * 60)} min`,
      recipe: faker.lorem.sentences(),
      cuisineId: Math.floor(Math.random() * 8),
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
    queryInterface.bulkDelete('Meals', null, {}),

};
