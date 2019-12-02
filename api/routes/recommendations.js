const recommendationController = require('../controllers').recommendation;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/setRecs', checkAuth, recommendationController.addMealsToRecommendation);
  app.get('/api/getRecs', checkAuth, recommendationController.getMeals);
  // app.post('/api/recommendations', checkAuth, recommendationController.add);
  app.delete('/api/recommendations', checkAuth, recommendationController.removeMeal);
};
