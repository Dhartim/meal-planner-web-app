const userController = require('../controllers').user;

module.exports = (app) => {
  app.get('/api/user/:id', userController.getById);
  app.post("/api/register", userController.create);
}