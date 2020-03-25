
module.exports = {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    Promise.all([
      queryInterface.addColumn(
        'Nutrition',
        'ingredientId',
        Sequelize.INTEGER,
      ),
    ]),

  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    Promise.all([
      queryInterface.removeColumn('Nutrition', 'ingredientId'),
    ]),

};
