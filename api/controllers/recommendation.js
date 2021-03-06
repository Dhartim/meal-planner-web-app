const Sequelize = require('sequelize');
const {
  Recommendation, Meal, Preference, Nutrition,
} = require('../models');
const getUserId = require('../middleware/getUserId');

const { Op } = Sequelize;

function getMeals(req, res) {
  const userId = getUserId(req);
  return Recommendation.findAll({
    where: {
      userId,
    },
  }).then((recommendations) => {
    const recMealIds = [];
    for (let i = 0; i < recommendations.length; i++) {
      recMealIds.push(recommendations[i].mealId);
    }
    return Meal
      .findAll({
        where: {
          id: recMealIds,
        },
        include: [{
          model: Nutrition,
        }],
      })
      .then((meals) => {
        res.status(200).send(meals);
      });
  })
    .catch((error) => res.status(400).send(error));
}

function addMealsToRecommendation(req, res) {
  const userId = getUserId(req);
  return Preference.findAll({
    where: {
      userId,
    },
  }).then((preference) => {
    const pref = preference[0].dataValues;
    if (pref) {
      const {
        calories, carbs, diet, fat, mealCount, priceLimit, protein,
      } = pref;
      const dietPerMeal = calories / mealCount;
      // TODO need to fix to filter through other macros

      return Meal.findAll({
        where: {
          price: { [Op.lte]: priceLimit },
          dietType: { [Op.iLike]: diet },
        },
        include: {
          model: Nutrition,
        },
      }).then((meals) => {
        res.status(200).send(meals);
        meals.forEach((meal) => Recommendation
          .findOrCreate({
            where: {
              userId,
              mealId: meal.id,
            },
            defaults: {
              userId,
              mealId: meal.id,
            },
          }).catch((error) => res.status(400).send({
            message: error,
          })));
      }).catch((err) => console.log(err));
    }
  }).then(() => res.status(200).send())
    .catch((err) => res.status(400).send());
}

function removeMeal(req, res) {
  const userId = getUserId(req);

  return Recommendation.findOne({
    where: {
      userId,
      mealId: req.body.mealId,
    },
  })
    .then((recommendation) => {
      if (!recommendation) {
        return res.status(400).send({
          message: 'Could not find recommendation to delete',
        });
      }
      return recommendation.destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
    });
}

module.exports = {
  addMealsToRecommendation,
  removeMeal,
  getMeals,
};
