const { Preference } = require('../models')

function getById(req, res) {
    return Preference.findByPk(req.params.id)
        .then((preference) => {
            if (!preference) {
                return res.status(404).send({
                    message: 'User does not have preferences'
                });
            }
            return res.status(200).send(preference)
        })
}

function updatePreferences(req, res) {
    let updatedValues = {
        calories: req.params.calories,
        fat: req.params.fat,
        protein: req.params.protein,
        carbs: req.params.carbs,
        currentWeight: req.params.weight,
        desiredWeight: req.params.desiredWeight
    };
    let userId = req.params.id;
    // let calories = req.params.calories;
    // let fat = req.params.fat;
    // let protein = req.params.protein;
    // let carbs = req.params.carbs;
    // let currentWeight = req.params.weight;
    // let desiredWeight = req.params.desiredWeight;

    return Preference.update(updatedValues, { where: {userId: userId}})
        .then((preference) => {
            if (!preference) {
                return res.status(404).send({
                    message: 'User does not have preferences'
                });
            }
            return res.status(200).send(preference)
        })
}

module.export = {
    getById,
    updatePreferences,
}