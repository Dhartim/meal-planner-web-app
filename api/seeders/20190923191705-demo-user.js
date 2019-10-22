
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    id: '1',
    firstName: 'One',
    lastName: 'TestUser',
    password: bcrypt.hashSync('12345'),
    email: 'test1@test.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    id: '2',
    firstName: 'Two',
    lastName: 'TestUser',
    password: bcrypt.hashSync('23456'),
    email: 'test2@test.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    firstName: 'Three',
    lastName: 'Test',
    email: 'a@a.com',
    password: bcrypt.hashSync('12345'),
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
