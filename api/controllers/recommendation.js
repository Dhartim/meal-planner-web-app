const { Recommendation, Meal, Nutrition } = require('../models');
const getUserId = require('../middleware/getUserId');

function getMealsList(req) {
  let price = req.params.price;
  let diet = req.params.diet;
  let 
  return Meal.findAll({
    where({
      
    })

  })
}

function add(req, res) {
  const userid = getUserId(req);
  const meals = getMealsList(req)
  return Recommendation
    .create({
      userId: userid,
      mealId: req.body.mealId,
    })
    .then((recommendation) => res.status(201).send(recommendation))
    .catch((error) => res.status(400).send(error));
}