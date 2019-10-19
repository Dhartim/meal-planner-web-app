const { Nutrition } = require('../models');

function getById(req, res) {
  return Nutrition.findByPk(req.params.id)
    .then((nutrition) => {
      if (!nutrition) {
        return res.status(404).send({
          message: 'nutrition not found',
        });
      }
      return res.status(200).send(nutrition);
    })
    .catch((error) => res.status(400).send(error));
}

module.exports = {
  getById,
}