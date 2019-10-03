const Meal = require("../models").Meal;

function list (req, res) {
  console.log('--------',req)
  return Meal.findAll({order: [
    ['dishName', 'Desc'],
  ]})
  .then( Meals => res.status(200).send(Meals) )
  .catch( error => res.status(400).send(error)) 
}

function getById(req, res) {
  return Meal.findByPk(req.params.id)
    .then( meal => {
      if (!meal) {
        return res.status(404).send({
          message: "Meal not found"
        });
      }
      return res.status(200).send(meal)
    })
    .catch( error => res.status(400).send(error) );
}

module.exports = {
  list,
  getById
}