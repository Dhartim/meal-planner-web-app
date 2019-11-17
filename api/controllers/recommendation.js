const { Recommendation, Meal, Preference, Nutrition } = require('../models');
const getUserId = require('../middleware/getUserId');
const Sequelize = require('sequelize');
const {Op} = Sequelize

// async function getMealsList(req) {
//   const userId = getUserId(req)
//   const preferences = Preference.findAll().then(pref =>
//       console.log(pref)
//   );
//
//   await console.log(preferences)
//
//   await Meal.findAll({
//     where: {
//
//     }
//   })
// }
//
// function getPreferences(userId) {
//   return Preference.findAll({
//     where: {
//       userId: userId
//     }
//   }).then(preference=>
//       console.log(preference)
//   )
//       .catch(err =>
//           console.log(err)
//       )
//
// }

function addMealsToRecommendation(req, res) {
  const userId = getUserId(req);
  return Preference.findAll({
    where:{
      userId: userId
    }
  }).then( function(preference) {
    let pref = preference[0].dataValues
    if (pref){
      const { calories, carbs, diet, fat, mealCount, priceLimit, protein } = pref
      const dietPerMeal =  calories / mealCount;

      return Meal.findAll({
        // where: {
        //   price: { [Op.lte] : priceLimit }
        // },
        include: {
          model: Nutrition,
          where: {
            calories: { [Op.lte] : dietPerMeal },
            totalCarbohydrates: { [Op.lte] : carbs },
            totalFat: { [Op.lte] : fat},
            protein: { [Op.lte] : protein },
            diet: { [Op.iLike] : diet },
          }
        }
      }).then(function(meals) {
        console.log(meals)
        meals.forEach(meal=> {
          Recommendation
              .create({
                userId: userid,
                mealId: req.body.mealId,
              }).catch((error) => res.status(400).send(error));
        })
      }).catch(err=> console.log('============================================', err))
    }
    return pref
  }).then(() => res.status(200).send())
      .catch(err => res.status(400).send())
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

module.exports = {
  addMealsToRecommendation,
  removeMeal
}