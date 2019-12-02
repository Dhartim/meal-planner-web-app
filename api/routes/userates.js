const ateController = require('../controllers').userAte;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/ates/', checkAuth, ateController.list);
  app.post('/api/ate/', checkAuth, ateController.add);
  app.get('/api/hasAte/:mealId', checkAuth, ateController.hasAte);
  app.delete('/api/ate', checkAuth, ateController.destroy);
};
