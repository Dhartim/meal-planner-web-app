const User = require("../models").User
const config = require("../config/config.json")

//tools
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

function login (req, res) {
  const body = req.body;
  return User.findOne({ 
    where: { 
      email: body.email 
    } 
  })
  .then(user => {
    const validPassword = bcrypt.compareSync(
      body.password, 
      user.password
    );

    !validPassword && res.status(400).send({ auth: false, token: null })

    const token = jwt.sign(
      {
        user
      },
      config.jwt.jwtSecret,
      {
        expiresIn: config.jwt.jwtDuration
      }
    );
    res.status(200).send({
      auth:true,
      token: token,
      userId: user.id
    })
  }).catch(err => {
        res.status(400).send("Email or Password was not valid");
  })
}



module.exports = {
  login,
}