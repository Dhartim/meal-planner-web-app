const usersController = require('../controllers').users;

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Bustin\' makes me feel good.',
	}));
	
	/* Users */
	app.get('/api/users', usersController.list);
	app.post('/api/users/signup', usersController.signup);

	// app.all('/api/users', (req, res) =>
	// res.status(405).send({
	// 	message: 'Method Not Allowed',
	// }));
};