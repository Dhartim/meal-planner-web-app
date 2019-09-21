const express = require('express');
const path = require('path');
const uuid = require('uuid/v4')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(uuid);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
