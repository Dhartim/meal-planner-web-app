const Sequelize = require('sequelize');
const { Cuisine, Meal } = require('../models');

function listByType(req, res) {
  const cType = req.query.type;
  if (!cType) {
    return res.status(400).send({ message: 'need to pass a type' });
  }
  return Cuisine.findAll({
    where: Sequelize.where(
      Sequelize.fn('lower', Sequelize.col('cuisineType')),
      Sequelize.fn('lower', cType),
    ),
    include: [{
      model: Meal,
    }],
  })
    .then((meals) => res.status(200).send(meals))
    .catch((error) => res.status(400).send(error));
}

function list(req, res) {
  return Cuisine.findAll({
    include: [{
      model: Meal,
    }],
  })
    .then((meals) => res.status(200).send(meals))
    .catch((error) => res.status(400).send(error));
}

module.exports = {
  listByType,
  list,
};
