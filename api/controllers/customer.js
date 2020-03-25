const Sequelize = require('sequelize');
const stripePlan = require('../config/secret.json');
const stripe = require('stripe')(stripePlan.STRIPE_SECRET_KEY);
const { Customer, User } = require('../models');

function createOrModifyCustomer(userId) {
  const currentDate = new Date();
  const nextMonth = currentDate.setMonth(currentDate.getMonth() + 1);
  return Customer
    .findOrCreate({
      where: {
        userId,
      },
      defaults: {
        userId,
        expiresAt: nextMonth,
      },
    }).then(([customer, created]) => {
      if (!created) {
        const current = customer.expiresAt;
        const next = current.setMonth(current.getMonth() + 1);
        return Customer.update({
          expiresAt: next,
        },
        {
          where: {
            userId,
          },
        });
      }
    });
}

function charge(req, res) {
  const { userId, stripeToken } = req.body;
  stripe.charges.create({
    amount: 1000,
    currency: 'usd',
    description: 'Basic meal plan',
    source: stripeToken,
  }, (error, charge) => {
    if (error) {
      res.send({
        success: false,
        message: error,
      });
    } else {
      res.send({
        success: true,
        message: 'success',
      });
      createOrModifyCustomer(userId);
    }
  });
}

module.exports = {
  charge,
};
