const {
  User, Customer, Preference, UserAte,
} = require('../models');
const getUserId = require('../middleware/getUserId');

function getAccount(req, res) {
  const userId = getUserId(req);

  return User
    .findOne({
      where: {
        id: userId,
      },
      include: [
        { model: Customer },
        { model: Preference },
        { model: UserAte },
      ],
      attributes: ['id', 'email', 'firstName', 'lastName'],
    })
    .then((account) => {
      res.status(200).send({ account });
    }).catch((error) => {
      res.status(400).send('Could not get account details');
    });
}

module.exports = {
  getAccount,
};
