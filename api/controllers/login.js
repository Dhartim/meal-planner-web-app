const User = require("../models").user
const config = require("../config")

//tools
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

function login (req, res) {
  const body = req.body;
  console.log("body---> ", body)
  return User.findOne({ 
    where: { 
      email: body.email 
    } 
  })
  .then(user => {
    // const uLen = user.length-1;
    
    const validPassword = bcrypt.compareSync(
      body.password, 
      user.password
    );

    !validPassword && res.status(400).send({ auth: false, token: null })

    const token = jwt.sign(
      {
        user: user
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
    .catch(err => {
      res.status(400).send("Email or Password was not validgit")
    })
  })

}



module.exports = {
  login,
}