const { Preference } = require('../models');

function getPreferences(req, res) {
  return Preference.findByPk(req.params.id)
    .then((preference) => {
      if (!preference) {
        return res.status(404).send({
          message: 'User does not have preferences',
        });
      }
      return res.status(200).send(preference);
    });
}

function createPreferences(req, res) {
    console.log("CREATE PREFERENCES");

    let values = {
        // userId: req.body.userId,
        diet: req.body.diet,
        calories: req.body.calories,
        fat: req.body.fat,
        protein: req.body.protein,
        carbs: req.body.carbs,
        weight: req.body.weight,
        desiredWeight: req.body.desiredWeight,
        mealCount: req.body.mealCount,
        priceLimit: req.body.priceLimit
    };

    console.log(values);

    return Preference.findOrCreate({
        where: {userId: req.body.userId},
        defaults: values
    })
        .then(result => {
            return res.stat(200).send({
                message: "New preferences created"
            })
        })
        .catch(err => {
            return res.status(404).send({
                message: err
            })
        })
}

function updatePreferences(req, res) {
  const updatedValues = {};

  let params = [
    'calories',
    'fat',
    'protein',
    'carbs',
    'weight',
    'desiredWeight',
    'mealCount',
    'priceLimit'
  ];

  let p;
  for (p of params) {
    const data = req.params[p];
    if (data) {
      updatedValues[p] = data;
    }
  }
  // let calories = req.params.calories;
  // let fat = req.params.fat;
  // let protein = req.params.protein;
  // let carbs = req.params.carbs;
  // let currentWeight = req.params.weight;
  // let desiredWeight = req.params.desiredWeight;

  const userId = req.params.id;

  return Preference.update(updatedValues, { where: { userId } })
    .then((preference) => {
      if (!preference) {
        return res.status(404).send({
          message: 'User does not have preferences.',
        });
      }
      return res.status(200).send(preference);
    });
}

module.exports = {
    getPreferences,
    createPreferences,
    updatePreferences,
};
