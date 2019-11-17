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
  const values = {
    userId: req.params.id,
    calories: req.params.calories,
    fat: req.params.fat,
    protein: req.params.protein,
    carbs: req.params.carbs,
    currentWeight: req.params.weight,
    desiredWeight: req.params.desiredWeight,
  };

  return Preference.create(values)
    .then((result) => res.stat(200).send({
      message: result,
    }))
    .catch((err) => res.status(404).send({
      message: err,
    }));
}

function updatePreferences(req, res) {
  const updatedValues = {};

  const params = [
    'calories',
    'fat',
    'protein',
    'carbs',
    'currentWeight',
    'desiredWeight',
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

module.export = {
  getPreferences,
  createPreferences,
  updatePreferences,
};
