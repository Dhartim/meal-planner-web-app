const mealController = require('../controllers').meal;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/meals/', checkAuth, mealController.list);
  app.post('/api/meals/:id', checkAuth, mealController.getById);
};
