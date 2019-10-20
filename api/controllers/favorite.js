const jwt = require('jsonwebtoken');
const { Favorite, Meal } = require('../models');
const config = require('../config/config.json');

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
        favoriteMealIds.push(favorites[i].id);
      }
      console.log("favoriteMealIds: %s", favoriteMealIds);
      return Meal
        .findAll({
          where: {
            id: favoriteMealIds,
          }
        })
        .then(meals => {
          console.log("meals: %s", meals);
          for(let j = 0; j < meals.length; j++) {
            console.log("meals: %s", meals[j].id);
          }
          res.status(200).send(meals);
        })
    })
    .catch((error) => res.status(400).send(error));
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
  add,
  destroy,
};
