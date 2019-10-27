const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

module.exports = (req) => {
  const token = req.headers['x-access-token'];
  const decode = jwt.verify(token, config.jwt.jwtSecret);
  if (decode.userId) {
    return decode.userId;
  } else {
    return decode
  }
};