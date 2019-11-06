const mealIngredientController = require('../controllers').mealIngredient;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/ingredients/:mealId', checkAuth, mealIngredientController.list);
  // app.post('/api/meals/:id', checkAuth, mealController.getById);
};