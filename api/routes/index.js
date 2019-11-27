module.exports = (app) => {
  /* GET home page. */
  app.get('/', (req, res) => {
    res.send({ title: 'Express' });
  });

  // require user routes for the app
  require('./account')(app);
  require('./authorization')(app);
  require('./customers')(app);
  require('./cuisines')(app);
  require('./favorites')(app);
  require('./email')(app);
  require('./meals')(app);
  require('./mealIngredient')(app);
  require('./nutrition')(app);
  require('./recommendations')(app);
  require('./userMeals')(app);
  require('./users')(app);
  require('./preferences')(app);
};
