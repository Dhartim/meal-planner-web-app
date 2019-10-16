const customerController = require('../controllers').customer;
const checkAuth = require('../middleware/checkAuth');

module.exports = (app) => {
  // app.get('/api/customer/userId/:id', customerController.getById);
  app.post('/api/charge',  customerController.charge);
};