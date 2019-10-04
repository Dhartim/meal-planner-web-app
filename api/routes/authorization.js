const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/checkauth', checkAuth, function(req, res) {
    res.sendStatus(200);
  });
};
