const jwt = require('jsonwebtoken');
const { Favorite, Meal } = require('../models');
const config = require('../config/config.json');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function getUserId(req) {
  /*const token = req.headers.authorization.split(' ')[1];*/
  const token = req.headers['x-access-token'];
  const decode = jwt.verify(token, config.jwt.jwtSecret);
  return decode.user.id;
}

function list(req, res) {
  const userid = getUserId(req);
  return Favorite.findAll({
    where: {
      userId: userid,
    },
  })
    .then((favorites) => {
      let favoriteMealIds = [];
      for(let i = 0; i < favorites.length; i++) {
        favoriteMealIds.push(favorites[i].mealId);
      }
      console.log("favoriteMealIds: %s", favoriteMealIds);
      return Meal
        .findAll({
          where: {
            id: favoriteMealIds,
          }
        })
        .then(meals => {
          for(let j = 0; j < meals.length; j++) {
            console.log("meals[%d]: %s", j, meals[j].id);
          }
          res.status(200).send(meals);
        })
    })
    .catch((error) => res.status(400).send(error));
}

function isFavorite(req, res) {
  const userId = getUserId(req);
  // need [3,4] and [3,2]
  return Favorite
    .findOne({
      where: {
        userId: userId,
        mealId: req.params.mealId,
      }
    })
    .then(favorite => {
      const isNull = favorite === null;
      // console.log("isNull=%s", isNull);

      if(!isNull) {
        console.log("userId=%d, mealId=%d", favorite.userId, favorite.mealId);
        res.status(200).send({
          isFavorite: true
        });
      } else {
        res.status(200).send({
          isFavorite: false
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
  return Favorite
    .create({
      userId: userid,
      mealId: req.body.mealId,
    })
    .then((favorite) => res.status(201).send(favorite))
    .catch((error) => res.status(400).send(error));
}

/*function destroy(req, res) {
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
}*/

function destroy(req, res) {
  const userid = getUserId(req);

  return Favorite.findOne({
    where: {
      userId: userid,
      mealId: req.body.mealId
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
