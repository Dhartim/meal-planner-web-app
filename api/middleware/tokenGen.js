const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

module.exports = (res, user) => {
  // payload to create token; does not contain sensitive info
  const payload = {
    userId: user.id,
    email: user.email,
  };
  try {
    return jwt.sign(payload, config.jwt.jwtSecret, {
      expiresIn: config.jwt.jwtDuration, // expires after 24 hours
    });
  } catch (Error) {
    return res.status(400).send({
      message: 'Unable to get token.',
    });
  }
};
