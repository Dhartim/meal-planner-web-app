const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');
const secret = require('../config/secret');

function getUserEmail(req) {
  const token = req.headers['x-access-token'];
  const decode = jwt.verify(token, config.jwt.jwtSecret);
  return decode.user.email;
}

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: secret.email, //need to add your email to secret.. if using gmail follow this https://nodemailer.com/usage/using-gmail/
    password: secret.password // need to add password to secret
  }
})

let mailOptions = {
  from: "mealPlanner@gmail.com",
  to: getUserEmail,
  subject: "This is your meal plan",
  text:"your meal"
}

transporter.sendMail(mailOptions, function(err,data){
  if ( err ){
    console.log(err)
  } else {
    console.log('sent')
  }
})

function sendEmail (res, req) {
  
}

module.exports = {
  sendEmail,
  createSchedule
}