const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const config = require('./server/config/config');

// the express app
const app = express();

// log requests to console
app.use(logger('dev'));
// parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.set('superSecret', config.secret);

// appending app to the require allows the express app to have access to the routes
require('./server/routes')(app);
// catch-all route where other paths get routed to that are not specified
app.get('*', (req, res) => res.status(200).send({
	message: '{ message: "HELLO THERE" }',
}));

module.exports = app;