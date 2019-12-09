const Sequelize = require('sequelize');
const { Cuisine, Meal, Nutrition } = require('../models');

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
      include: [{
        model: Nutrition,
      }],
    }],
  })
    .then((meals) => res.status(200).send(meals))
    .catch((error) => res.status(400).send(error));
}

function list(req, res) {
  return Cuisine.findAll({
    include: [{
      model: Meal,
      include: [{
        model: Nutrition,
      }],
    }],
  })
    .then((meals) => {
      console.log('meals=%s', meals);
      res.status(200).send(meals);
    })
    .catch((error) => {
      console.log('cuisine error = %s', error);
      res.status(400).send(error);
    });
}

module.exports = {
  listByType,
  list,
};
