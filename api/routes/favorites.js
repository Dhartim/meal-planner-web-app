const favoriteController = require('../controllers').favorite;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/favorites/', checkAuth, favoriteController.list);
  app.post('/api/favorites/', checkAuth, favoriteController.add);
  app.get('/api/favorites/isfavorite/:mealId', checkAuth, favoriteController.isFavorite);
  // app.delete('/api/favorites/:id', checkAuth, favoriteController.destroy);
  app.delete('/api/favorites', checkAuth, favoriteController.destroy);
};
