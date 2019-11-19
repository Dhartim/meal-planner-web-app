const userMealController = require('../controllers').userMeal;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/userMeals', checkAuth, userMealController.list);
  app.post('/api/userMeals', checkAuth, userMealController.add);
  app.delete('/api/userMeals/:id', checkAuth, userMealController.destroy);
};
