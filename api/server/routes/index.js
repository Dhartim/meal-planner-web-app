const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Bustin\' makes me feel good.',
  }));
  
  /* Users */
  app.get('/api/users/', usersController.list);
  app.post('/api/users/signup', usersController.signup);
};