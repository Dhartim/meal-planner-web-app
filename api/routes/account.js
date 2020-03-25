const accountController = require('../controllers').account;

module.exports = (app) => {
  app.get('/api/account', accountController.getAccount);
};
