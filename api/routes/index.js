var express = require('express');
var router = express.Router();
const uuid = require('uuid/v4')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
