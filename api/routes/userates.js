const ateController = require('../controllers').userate;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/ates/', checkAuth, ateController.list);
  app.post('/api/ate/', checkAuth, ateController.add);
  app.get('/api/ate/hasAte/:mealId', checkAuth, ateController.hasAte);
  //app.delete('/api/ates/:id', checkAuth, ateController.destroy);
  app.delete('/api/ate', checkAuth, ateController.destroy);
};
