
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    queryInterface.bulkInsert('Users', [
      {
        firstName: 'j',
        lastName: 'j',
        email: 'j@j.com',
        password: bcrypt.hashSync('12345678'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'k',
        lastName: 'k',
        email: 'k@k.com',
        password: bcrypt.hashSync('12345678'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'l',
        lastName: 'l',
        email: 'l@l.com',
        password: bcrypt.hashSync('12345678'),
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
    queryInterface.bulkDelete('Favorites', null, {}),

};
