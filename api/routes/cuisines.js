const cuisineController = require('../controllers').cuisine;

module.exports = (app) => {
  app.get('/api/cuisine', cuisineController.listByType);
  app.get('/api/cuisines', cuisineController.list);
};
