const Sequelize = require('sequelize');
const { MealIngredient, Meal, Ingredient } = require('../models');
const getUserId = require('../middleware/getUserId');

const { Op } = Sequelize;

function list(req, res) {
  return MealIngredient.findAll({
    where: {
      mealId: req.params.mealId,
    },
  })
    .then((ingredients) => {
      const ingredientIds = [];
      // push the Ingredients mealId into the array
      for (let i = 0; i < ingredients.length; i++) {
        ingredientIds.push(ingredients[i].ingredientId);
      }
      // Use the array of mealIds to find all those meals
      return Ingredient
        .findAll({
          where: {
            id: ingredientIds,
          },
        })
        .then((ingredients) => res.status(200).send(ingredients));
    })
    .catch((error) => res.status(400).send(error));
}

module.exports = {
  list,
};
