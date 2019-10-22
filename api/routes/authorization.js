const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  app.get('/api/checkauth', checkAuth, (req, res) => {
    res.sendStatus(200);
  });
};
