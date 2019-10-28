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
    type: 'OAuth2',
    user: 'joald415@gmail.com', //need to add your email to secret.. if using gmail follow this https://nodemailer.com/usage/using-gmail/
    clientId:'529458288419-eb7o5ddsq24i2n5d2ulhr52v6717bciq.apps.googleusercontent.com', // will need to set up your own 
    clientSecret: 'q6CB5jyJwu0GX3QEBrBL4h67',
    refreshToken: '1//044BYtKIPxSA4CgYIARAAGAQSNwF-L9IrK_-UJZLqiKS4kwtV5HzmMhLfQyZetNIE2x76QzJuVYWWpt1Jt7noEFEM2VB-euA0fxk',
    accessToken: 'ya29.Il-pByf7j7DfBUBBPqFvIoJ5_l9Ach3obGGXPzh-m1udNKANR31dVaBBYoPprJBtwmdsGdFBqQNWlmeGemJXX4dgo0OXZdZ6X7K333OCRtrDcanb3aEzc3ZlhNDRO25pLQ' //expires in 24 hours
    // password: secret.password // need to add password to secret
  }
})


function mailOptions(from, to, subject, text){
  return {
    from: from,
    to: to,
    subject: subject,
    text:text
  }
}

function contactUs (req, res) {
//  console.log(transporter);
  const {email, body, firstName} = req.body;
  const subject = `${firstName} is contacting you from: ${email}`;
  const meal_planner_email = 'jaldujaili@usfca.edu'; // email that will be sent to
  const mOptions = mailOptions(secret.email, meal_planner_email, subject, body);
  // console.log(mOptions)
  transporter.sendMail(mOptions, function(err,data){
    console.log('err:',err, ' data: ', data)
    if ( err ){
      res.send({
        success: false,
        message: err,
      });
    } else {
      res.send({
        success: true,
        message: 'success',
      });
    }
  })
}

function createSchedule() {
  console.log()
}

module.exports = {
  contactUs,
  createSchedule
}