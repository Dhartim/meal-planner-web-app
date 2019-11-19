const Sequelize = require('sequelize');
const { Favorite, Meal, Nutrition } = require('../models');
const getUserId = require('../middleware/getUserId');

const { Op } = Sequelize;

function list(req, res) {
  const userid = getUserId(req);
  return Favorite.findAll({
    where: {
      userId: userid,
    },
  })
    .then((favorites) => {
      const favoriteMealIds = [];
      // push the favorites mealId into the array
      for (let i = 0; i < favorites.length; i++) {
        favoriteMealIds.push(favorites[i].mealId);
      }
      console.log('favoriteMealIds: %s', favoriteMealIds);
      // Use the array of mealIds to find all those meals
      return Meal
        .findAll({
          where: {
            id: favoriteMealIds,
          },
          include: [{
            model: Nutrition,
          }],
        })
        .then((meals) => {
          // logging purposes
          // for(let j = 0; j < meals.length; j++) {
          //   console.log("meals[%d]: %s", j, meals[j].id);
          // }
          // return the meals instead of favorite objects as the favorites table is mainly to keep track of
          // the primaryKey associations
          res.status(200).send(meals);
        });
    })
    .catch((error) => res.status(400).send(error));
}

function isFavorite(req, res) {
  const userId = getUserId(req);
  // need [3,4] and [3,2]
  return Favorite
    .findOne({
      where: {
        userId,
        mealId: req.params.mealId,
      },
    })
    .then((favorite) => {
      // If found a favorite, tell client that this meal is a favorite
      if (favorite !== null) {
        console.log('userId=%d, mealId=%d', favorite.userId, favorite.mealId);
        res.status(200).send({
          isFavorite: true,
        });
      } else {
        res.status(200).send({
          isFavorite: false,
        });
      }
    })
    .catch((error) => {
      console.log('error=%s', error);
      res.status(400).send(error);
    });
}

function add(req, res) {
  const userid = getUserId(req);
  return Favorite
    .create({
      userId: userid,
      mealId: req.body.mealId,
    })
    .then((favorite) => res.status(201).send(favorite))
    .catch((error) => res.status(400).send(error));
}

/* function destroy(req, res) {
  return Favorite
    .findByPk(req.params.id)
    .then((favorite) => {
      if (!favorite) {
        return res.status(400).send({
          message: 'Could not find favorite to delete',
        });
      }
      return favorite.destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
    });
} */

function destroy(req, res) {
  const userid = getUserId(req);

  return Favorite.findOne({
    where: {
      userId: userid,
      mealId: req.body.mealId,
    },
  })
    .then((favorite) => {
      if (!favorite) {
        return res.status(400).send({
          message: 'Could not find favorite to delete',
        });
      }
      return favorite.destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
    });
}

module.exports = {
  list,
  isFavorite,
  add,
  destroy,
};
