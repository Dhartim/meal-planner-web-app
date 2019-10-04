const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const config = require('../config/config.json');

function login(req, res) {
  const { body } = req;
  return User
    .findOne({
      where: {
        email: body.email,
      },
    })
    .then((user) => {
      const validPassword = bcrypt.compareSync(
        body.password,
        user.password,
      );

      !validPassword && res.status(400).send({ auth: false, token: null });

      const token = jwt.sign(
        {
          user,
        },
        config.jwt.jwtSecret,
        {
          expiresIn: config.jwt.jwtDuration,
        },
      );
      res.set('token', token);

      res.status(200).send({
        auth: true,
        userId: user.id,
      });
    }).catch((err) => {
      res.status(400).send('Email or Password was not valid');
    });
}


module.exports = {
  login,
};
