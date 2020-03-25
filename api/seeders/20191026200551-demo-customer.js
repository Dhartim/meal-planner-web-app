
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Customers', [{
    id: '1',
    userId: '3',
    expiresAt: new Date('January 31 2021 12:30'),
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    id: '2',
    userId: '2',
    expiresAt: new Date('January 31 2019 12:30'),
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Customers', null, {}),
};
