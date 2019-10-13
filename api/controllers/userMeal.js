const jwt = require('jsonwebtoken');
const { UserMeal } = require('../models');
const config = require('../config/config.json');

function getUserId(req) {
  console.log(req.headers['x-access-token'])
  const token = req.headers['x-access-token'];
  const decode = jwt.verify(token, config.jwt.jwtSecret);
  return decode.user.id;
}

function list(req, res) {
  const userid = getUserId(req);
  return UserMeal.findAll({
    where: {
      userId: userid,
    },
  })
    .then((userMeals) => res.status(200).send(userMeals))
    .catch((error) => res.status(400).send(error));
}

function add(req, res) {
  const userid = getUserId(req);
  return UserMeal
    .create({
      userId: userid,
      mealId: req.body.mealId,
    })
    .then((userMeal) => res.status(201).send(userMeal))
    .catch((error) => res.status(400).send(error));
}

function destroy(req, res) {
  return UserMeal
    .findByPk(req.params.id)
    .then((userMeal) => {
      if (!userMeal) {
        return res.status(400).send({
          message: 'Could not find userMeal to delete',
        });
      }
      return userMeal.destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
    });
}
module.exports = {
  list,
  add,
  destroy,
};
