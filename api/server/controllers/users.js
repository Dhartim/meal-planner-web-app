const User = require('../models').User;
const config = require('../config/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* Function to generate a JWT token for the user */
function generateToken(user) {
	//payload to create token; does not contain sensitive info
	const payload = {
		userId: user.id, 
		email: user.email
	};
	try {
		return token = jwt.sign(payload, config.secret, {
			expiresIn: "24h" //expires after 24 hours
		});
	} catch (Error) {
		return res.status(400).send({
			message: 'Unable to get token.'
		});
	}
}

module.exports = {
	list(req, res) {
		return User
			.findAll({
				// include: [{
				// 	model: Todo,
				// 	as: 'todos',
				// 	include: [{
				// 		model: TodoItem, 
				// 		as: 'todoItems'
				// 	}],
				// }]
			})
			.then(users => {
				return res.status(200).send({
					users
				})
			})
			.catch(error => res.status(400).send(error));
	},
	signup(req, res) {
		return User
			.findOrCreate({
				where: {
					email: req.body.email.trim()
				}, 
				defaults: {
					firstname: req.body.firstname.trim(),
					lastname: req.body.lastname.trim(),
					email: req.body.email.trim(),
					password: req.body.password.trim(),
				}
			})
			.then(([user, created]) => {
				//password confirmation can be done in front end
				//if account does exists, need to try again
				if(!created) {
					//409: conflict with an existing resource; ie. duplicate username/emails
					return res.status(409).send({
						message: 'Username or email already exists. Please try again.'
					});
				}
				// LOGGING PURPOSES ONLY
				console.log("LOGGING USER: ")
				console.log(user)
				var token = generateToken(user);

				return res.status(201).send({
					user: user,
					token: token,
				})
			})
			.catch(error => res.status(400).send({
				message: 'An error occurreded.'
			}));
	},
	authenticate(req, res) {
		return User
			.find({email: req.body.email})
			.then(user => {
				if(!user) {
					return res.status(404).send({
						//message: Authentication failed. Email or password is wrong'
						message: 'User Not Found'
					});
				} else {
					if(user.email !== req.body.email) {
						return res.status(404).send({
							//message: Authentication failed. Email or password is wrong'
							message: 'User Not Found'
						});
					}
					if (user.password !== req.body.password) {
						return res.status(404).send({
							message: 'Authentication failed. Email or password is wrong'
							// message: 'Authentication failed. Password is wrong'
						});
					}
					const payload = {email: user.email};

					// return res.status(201).send({
					// 	message: payload
					// });
					
					var token = jwt.sign(payload, app.get('superSecret'), {
						expiresIn: "24h" //expires after 24 hours
					});

					return res.status(201).send({
						success: true,
						message: 'Stuff',
						// token: token
					});
					
					// return res.json({
					// 	success: true,
					// 	message: 'Token get!',
					// 	token: token
					// });
					
				}
			})
			.catch(error => res.status(400).send(error));
	},
	destroy(req, res) {
		return User
			.findById(req.params.userId)
			.then(user => {
				if(!user) {
					return res.status(400).send({
						message: 'User Not Found',
					});
				}
				return user
					.destroy()
					.then(() => res.status(200).send({ message: 'User successfully deleted'}))
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	}
};