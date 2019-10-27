const { User, Customer } = require('../models');
const getUserId = require('../middleware/getUserId');

function getAccount(req, res) {
    const ret = getUserId(req);
    const userId = ret.user.id;

    return User
        .findOne({
            where: {
                id: userId,
            },
            include: [
              {model: Customer}
            ],
            attributes: ['id' ,'email', 'firstName', 'lastName']
        })
        .then((account) => {
            console.log("Account");
            console.log(account);
            res.status(200).send({account})
        }).catch((error) => {
            console.log(error);
            res.status(400).send("Could not get account details")
        })
}

module.exports = {
    getAccount,
};