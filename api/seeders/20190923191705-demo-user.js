'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: '1',
      firstName: 'One',
      lastName: 'TestUser',
      password: '12345',
      email: 'test1@test.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: '2',
      firstName: 'Two',
      lastName: 'TestUser',
      password: '23456',
      email: 'test2@test.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
