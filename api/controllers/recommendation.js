const { Recommendation, Meal, Nutrition } = require('../models');
const getUserId = require('../middleware/getUserId');

function getMealsList(req) {
  const { price, diet, mealFreq, calories, fat, protein, carbs, weight, desiredWeight } = req.params;

  return Meal.findAll({
    where({
      
    })
  })
}

function addMealsToRecommendation(req, res) {
  const userid = getUserId(req);
  const meals = getMealsList(req)
  meals.forEach(meal => {
    Recommendation
    .create({
      userId: userid,
      mealId: req.body.mealId,
    }).catch((error) => res.status(400).send(error));
  }).then((recommendation) => res.status(201).send(recommendation))
}

function removeMeal(req, res) {
  const userid = getUserId(req);

  return Recommendation.findOne({
    where: {
      userId: userid,
      mealId: req.body.mealId
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