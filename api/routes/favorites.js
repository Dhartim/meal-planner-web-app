const favoriteController = require('../controllers').meal;
const checkAuth = require('../middleware/checkAuth')
module.exports = (app) => {
  app.get('/api/favorites/', checkAuth, favoriteController.list);
  app.post("/favorites/:id", checkAuth, favoriteController.getById);
};