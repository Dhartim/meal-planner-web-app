//models
const User = require("../models").User;

//libraries
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('../config/secret');

const notFound = { message: 'User Not Found' };

/* Function to generate a JWT token for the user */
function generateToken(user) {
  //payload to create token; does not contain sensitive info
  const payload = {
    userId: user.id,
    email: user.email
  };
  try {
    return token = jwt.sign(payload, config.secret, {
      expiresIn: config.duration //expires after 24 hours
    });
  } catch (Error) {
    return res.status(400).send({
      message: 'Unable to get token.'
    });
  }
}

function create(req, res) {
  return User
    .findOrCreate({
      where: {
        email: req.body.email.trim()
      },
      defaults: {
        firstName: req.body.firstName.trim(),
        lastName: req.body.lastName.trim(),
        email: req.body.email.trim(),
        password: bcrypt.hashSync(req.body.password.trim())
      }
    })
    .then(([user, created]) => {
      //password confirmation can be done in front end
      //if account does exists, need to try again
      if(!created) {
        //409: conflict with an existing resource; ie. duplicate username/emails
        return res.status(409).send({
          message: 'Email already exists. Please try again.'
        });
      }

      var token = generateToken(user);
      res.set('token', token);

      console.log("token: %s, user: %s", token, user.id);

      return res.status(201).send({
        data: {
          user: user
        }
      })
    })
    .catch(error => res.status(400).send({
      message: 'An error occurred: ' + error
    }));
}

function update(req, res) {
  return User
    .findByPk(req.params.userid)
    .then(user => {
      if (!user) {
        return res.status(404).send(notFound)
      }
      return User.update({
        firstName: req.body.firstName.trim(),
        lastName: req.body.lastName.trim(),
        email: req.body.email.trim(),
        password: bcrypt.hashSync(req.body.password.trim())
      })
      .then(() => res.status(200).send(user))
      .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
}

function getById(req, res) {
  console.log(req.params);
  return User
    .findByPk(req.params.userId)
    .then(user => {
      return user ? res.status(200).send(user) : res.status(404).send(notFound)
    })
    .catch(error => res.status(400).send(error))
}

module.exports = {
  create,  
  update, 
  getById
};