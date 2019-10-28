const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

module.exports = (res, user) => {
  // payload to create token; does not contain sensitive info
  const payload = {
    userId: user.id,
    email: user.email,
  };
  try {
    const token = jwt.sign(payload, config.jwt.jwtSecret, {
      expiresIn: config.jwt.jwtDuration, // expires after 24 hours
    });
    console.log("token gen - token = %s", token);
    return token;
  } catch (Error) {
    console.log("Token gen error.");
    return res.status(400).send({
      message: 'Unable to get token.',
    });
  }
};
