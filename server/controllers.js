const axios = require('axios');
const Product = require('./models/Product');

function errorController(res, err) {
	res.status(500)
    .send({
    	success: false,
    	error: err
    });
}

function searchController(req, res) {
	axios({
		method: 'get',
		url: `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
	})
		.then(data => Product.allFromApi(data.data))
		.then(data => ({
			categories: [],
			items: data,
			author: res.author
		}))
		.then(data => res.status(200).json(data))
		.catch(err => {
			errorController(res, err);
		});
}

function singleProductController(req, res) {
	const idProduct = req.params.id;

	const infoRequire = axios({
		method: 'get',
		url: `https://api.mercadolibre.com/items/${req.params.id}`,
	});

	const descriptionRequire = axios({
		method: 'get',
		url: `https://api.mercadolibre.com/items/${req.params.id}/description`,
	});

	Promise.all([infoRequire, descriptionRequire])
		.then(values => {
			const product = Product.fromApi(values[0].data).setDescription(values[1].data.plain_text);
			return product
		})
		.then(dataProduct => ({
			item: dataProduct,
			author: res.author
		}))
		.then(data => res.status(200).json(data))
		.catch(err => {
			errorController(res, err);
		});
}

module.exports = {
	searchController,
	singleProductController
};
