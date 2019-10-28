module.exports = (app) => {
  /* GET home page. */
  app.get('/', (req, res) => {
    res.send({ title: 'Express' });
  });

  // require user routes for the app
  require('./users')(app);
  require('./meals')(app);
  require('./favorites')(app);
  require('./cuisines')(app);
  require('./authorization')(app);
  require('./userMeals')(app);
  require('./customers')(app);
  require('./nutrition')(app);
  require('./account')(app);
  require('./email')(app);
};
