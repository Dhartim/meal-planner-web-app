const { UserAte, Meal, Nutrition } = require('../models');
const getUserId = require('../middleware/getUserId');

const Sequelize = require('sequelize');

function list(req, res) {
  const userid = getUserId(req);
  return UserAte.findAll({
    where: {
      userId: userid,
    },
  })
    .then((userAtes) => {
      let userMealIds = [];
      // push the userAtes mealId into the array
      for(let i = 0; i < userAtes.length; i++) {
        userMealIds.push(userAtes[i].mealId);
      }
      console.log("userMealIds: %s", userMealIds);
      // Use the array of mealIds to find all those meals
      return Meal
        .findAll({
          where: {
            id: userMealIds,
          },
          include: [{
            model: Nutrition,
          }],
        })
        .then(meals => {
          // logging purposes
          // for(let j = 0; j < meals.length; j++) {
          //   console.log("meals[%d]: %s", j, meals[j].id);
          // }
          // return the meals instead of favorite objects as the favorites table is mainly to keep track of
          // the primaryKey associations
          res.status(200).send(meals);
        })
    })
    .catch((error) => res.status(400).send(error));
}

function hasAte(req, res) {
  const userId = getUserId(req);
  // need [3,4] and [3,2]
  return UserAte
    .findOne({
      where: {
        userId: userId,
        mealId: req.params.mealId,
      }
    })
    .then(mealAte => {
      // If found a mealAte, tell client that this meal is a mealAte
      if(mealAte !== null) {
        console.log("userId=%d, mealId=%d", mealAte.userId, mealAte.mealId);
        res.status(200).send({
          hasAte: true
        });
      } else {
        res.status(200).send({
          hasAte: false
        });
      }
    })
    .catch(error => {
      console.log("error=%s", error);
      res.status(400).send(error)
    });
}

function add(req, res) {
  const userid = getUserId(req);
  return UserAte
    .create({
      userId: userid,
      mealId: req.body.mealId,
    })
    .then((mealAte) => res.status(201).send(mealAte))
    .catch((error) => res.status(400).send(error));
}

function destroy(req, res) {
  const userid = getUserId(req);

  return UserAte.findOne({
    where: {
      userId: userid,
      mealId: req.body.mealId
    },
  })
  .then((mealAte) => {
    if (!mealAte) {
      return res.status(400).send({
        message: 'Could not find mealAte to delete',
      });
    }
    return mealAte.destroy()
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
  });
}

module.exports = {
  list,
  hasAte,
  add,
  destroy,
};
