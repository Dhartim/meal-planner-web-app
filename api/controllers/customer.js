const Sequelize = require('sequelize');
const stripePlan = require('../config/secret.json')
const stripe = require('stripe')(stripePlan.STRIPE_PUBLISHABLE_KEY);
const { Customer, User } = require('../models');

// function getById(req,res) {

// }

function getUser(userId){
  return User.findByPk(userId)
}

function charge(req,res) {
  console.log(req)
  const stripeToken = req.body.stripeToken;
  const user = User.findByPk(req.body.userId).then( user => {
    striper.customers.create({
      email: user.email,
      source: stripeToken,
    },function(err, customer){
      if (err) {
        res.send(err)
      } else { 
        const { id } = customer;
        customerId = id
        stripe.subscriptions.create({
          customer: id,
          items:[
            {
              plan: stripePlan.plan
            }
          ]
        }, function(error, subscription){
          if (error) {
            res.send(error);
          }else{
            res.send({success:true, message: 'Success'})
          }
        })
      }
    })
  })

  
}

module.exports = {
  // getById,
  charge,
};