const { User } = require('../models')

function getAccount(req, res) {
    const { body } = req;
    return User
        .findOne({
            where: {
                email: body.email,
            },
            attributes: ['id' ,'email', 'firstName', 'lastName']
        })
        .then((account) => {
            res.status(200).send({account})
        }).catch((error) => {
            console.log(error);
            res.status(400).send("Could not get account details")
        })
}

module.exports = {
    getAccount,
};