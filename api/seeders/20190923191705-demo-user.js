
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    firstName: 'One',
    lastName: 'TestUser',
    password: bcrypt.hashSync('12345'),
    email: 'test1@test.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    firstName: 'Two',
    lastName: 'TestUser',
    password: bcrypt.hashSync('23456'),
    email: 'test2@test.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    firstName: 'Three',
    lastName: 'Test',
    email: 'mdharti93@gmail.com',
    password: bcrypt.hashSync('12345'),
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
