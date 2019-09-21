var express = require('express');
var router = express.Router();

//controllers
const userController = require('../controllers').registration;
// const userAuth = require('../controller').userAuth;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/api/users', userController.list);
// router.get('/api/user/:id', userController.getById);

module.exports = router;
