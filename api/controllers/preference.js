const { Preference } = require('../models');
const getUserId = require('../middleware/getUserId');

function getPreferences(req, res) {
    return Preference.findByPk(req.body.userId)
        .then((preference) => {
            if (!preference) {
                return res.status(404).send({
                    message: 'User does not have preferences'
                });
            }
            return res.status(200).send(preference)
        })
}

function createPreferences(req, res) {

    console.log("CREATE PREFERENCES");
    let userId;
    if (!req.body.userId) {
        userId = getUserId(req);
    } else {
        userId = req.body.userId;
    }

    let values = {
        userId: userId,
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

    let updatedValues = {};
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

    let userId = req.body.userId;
    let param;
    for (param of params) {
        let data = req.body[param];
        if (data) {
            updatedValues[param] = data
        }
    }

    return Preference.update(updatedValues, {where: {userId: userId}})
        .then((preference) => {
            if (!preference) {
                return res.status(404).send({
                    message: 'User does not have preferences.'
                });
            }
            return res.status(200).send(preference)
        })
}

module.exports = {
    getPreferences,
    createPreferences,
    updatePreferences,
};