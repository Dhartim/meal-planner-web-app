const emailController = require('../controllers').email;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  // app.get('/api/email/userId/:id', emailController.getById);
  app.post('/api/contactUs', emailController.contactUs);
  app.post('/api/sendIngredient', emailController.sendIngredient);
};