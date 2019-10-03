const jwt = require('jsonwebtoken');
const config = require('../config/config.json');


module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, config.jwt.jwtSecret);
    req.userData = decode;
    next();
  } catch (error) {
    return res.status(401).send(error);
  }
};
