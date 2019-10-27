const checkAuth = require('../middleware/checkAuth');
const getUserId = require('../middleware/getUserId');

module.exports = (app) => {
  app.get('/api/checkauth', checkAuth, (req, res) => {
    const userId = getUserId(req);
    if(userId > 0) {
      res.status(200).send({
        userId: userId,
        authorized: true,
      });
    } else {
      res.status(400).send({
        error: new Error("Unauthorized"),
      });
    }
  });
};
