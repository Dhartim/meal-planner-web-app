const { Meal, Cuisine, Nutrition } = require('../models');

function list(req, res) {
  return Meal.findAll({
    // raw:true,
    sortOrderState: [
      ['dishName', 'Desc'],
    ],
    include: [
      {
        model: Cuisine,
        attributes: ['cuisineType'],
      },
      {
        model: Nutrition,
      },
    ],
  })
    .then((Meals) => res.status(200).send(Meals))
    .catch((error) => res.status(400).send(error));
}

function getById(req, res) {
  return Meal.findByPk(req.params.id)
    .then((meal) => {
      if (!meal) {
        return res.status(404).send({
          message: 'Meal not found',
        });
      }
      return res.status(200).send(meal);
    })
    .catch((error) => res.status(400).send(error));
}

module.exports = {
  list,
  getById,
};
