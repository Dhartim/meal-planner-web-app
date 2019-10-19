const cuisineController = require('../controllers').cuisine;

module.exports = (app) => {
  app.get('/api/cuisine', cuisineController.listByType); // e.g localhost:4000/api/cuisine?type=French
  app.get('/api/cuisines', cuisineController.list);
};
