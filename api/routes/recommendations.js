const recommendationController = require('../controllers').recommendation;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  // app.get('/api/recommendations/', checkAuth, recommendationController.list);
  // app.post('/api/recommendations/', checkAuth, recommendationController.add);
  // app.delete('/api/recommendations', checkAuth, recommendationController.destroy);
};