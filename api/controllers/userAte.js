const Sequelize = require('sequelize');
const { UserAte, Meal, Nutrition } = require('../models');
const getUserId = require('../middleware/getUserId');


function list(req, res) {
  const userid = getUserId(req);
  return UserAte.findAll({
    where: {
      userId: userid,
    },
    attributes: ['createdAt'],
    order: [
      ['createdAt', 'DESC'],
    ],
    include: [{
      model: Meal,
      attributes: ['price'],
      include: [{
        model: Nutrition,
        attributes: ['calories', 'totalFat', 'saturatedFat', 'cholesterol', 'sodium', 'totalCarbohydrates', 'fiber', 'sugar', 'protein'],
      }],
    }],
  })
    .then((userAtes) => {
      res.status(200).send(userAtes);
    })
    .catch((error) => res.status(400).send(error));
}

function hasAte(req, res) {
  const userId = getUserId(req);
  // need [3,4] and [3,2]
  return UserAte
    .findOne({
      where: {
        userId,
        mealId: req.params.mealId,
      },
    })
    .then((mealAte) => {
      // If found a mealAte, tell client that this meal is a mealAte
      if (mealAte !== null) {
        console.log('userId=%d, mealId=%d', mealAte.userId, mealAte.mealId);
        res.status(200).send({
          hasAte: true,
        });
      } else {
        res.status(200).send({
          hasAte: false,
        });
      }
    })
    .catch((error) => {
      console.log('error=%s', error);
      res.status(400).send(error);
    });
}

function add(req, res) {
  console.log(req);
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
      mealId: req.body.mealId,
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
