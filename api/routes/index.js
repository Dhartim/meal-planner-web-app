module.exports = (app) => {
  /* GET home page. */
  app.get('/', (req, res) => {
    res.send({ title: 'Express' });
  });

  // require user routes for the app
  require('./users')(app);
  require('./meals')(app);
};
