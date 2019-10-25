const bcrypt = require('bcryptjs');
const { User } = require('../models');
const generateToken = require('../middleware/tokenGen');

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

      console.log('validpass: ', validPassword);

      !validPassword && res.status(400).send({ auth: false, token: null });

      const token = generateToken(res, user);
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
