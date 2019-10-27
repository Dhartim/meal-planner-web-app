const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

module.exports = (req) => {
  const token = req.headers['x-access-token'];
  let userId = -1;
  if(token !== undefined) {
    const decode = jwt.verify(token, config.jwt.jwtSecret);
    if(decode !== undefined) {
      userId = decode.userId;
    }
  }
  return userId;
};