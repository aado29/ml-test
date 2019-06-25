function authorMiddleware(req, res, next) {
	res.author = {
		name: 'Alberto Alejandro',
		lastname: 'Diaz Olivar'
	};

	next();
};

module.exports = authorMiddleware;
