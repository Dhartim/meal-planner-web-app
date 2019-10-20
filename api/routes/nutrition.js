const nutritionController = require('../controllers').nutrition;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/nutrition/:id', nutritionController.getById);
};
