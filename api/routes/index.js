var express = require('express');
var router = express.Router();

//controllers
const userController = require('../controllers').user;
// const userAuth = require('../controller').userAuth;

module.exports = (app) => {
  /* GET home page. */
  app.get('/', (req, res) => {
    res.send({ title: 'Express' });
  })

  // require user routes for the app
  require('./users')(app);
}
