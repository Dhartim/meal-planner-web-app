const userController = require('../controllers').user;
const loginController = require('../controllers').login
const checkAuth = require('../middleware/checkAuth')
module.exports = (app) => {
  app.get('/api/user/:userId', checkAuth, userController.getById);
  app.post("/api/register", userController.create);
  app.post("/api/login", loginController.login)
};