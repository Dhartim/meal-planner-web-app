module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Bustin\' makes me feel good.',
  }));

  require('./userroutes')(app);
};