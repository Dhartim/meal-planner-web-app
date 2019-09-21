var express = require('express');
var router = express.Router();

//controllers
const userController = require('../controllers').user;
const loginController = require('../controolers').login;
// const userAuth = require('../controller').userAuth;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});


router.get('/api/user/:id', userController.getById);
router.post("/api/register", userController.create);
app.post("/api/login", loginController.login);


module.exports = router;
