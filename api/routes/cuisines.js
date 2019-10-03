const cuisineController = require('../controllers').cuisine;
module.exports = (app) => {
  app.get('/api/cuisines', cuisineController.list);
};