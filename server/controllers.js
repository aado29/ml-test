const axios = require('axios');
const Product = require('./models/Product');

function getCategoryId(data) {
	const results = data.data.results;
	const categories = results.map(item => item.category_id);

	const categoryIds = {};
	for (let i in categories) {
			categoryIds[categories[i]] = (categoryIds[categories[i]] || 0) + 1;
	}

	let category = { id: categories[0], count: 1 };
	for (let i in categoryIds) {
		if (category.count < categoryIds[i]) {
			category = { id: i, count: categoryIds[i] };
		}
	}

	return category;
}

function errorController(res, err) {
	console.log(err);
	res.status(500)
		.json({
			success: false,
			error: err
		});
}

function searchController(req, res) {
	let dataResponse = {};
	axios({
		method: 'get',
		url: `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
	})
		.then(data => {
			dataResponse = data;
			return Product.allFromApi(dataResponse.data)
		})
		.then(data => ({
			items: data,
			author: res.author
		}))
		.then(data => {
			const category = getCategoryId(dataResponse);
			dataResponse = data;
			return axios({
				method: 'get',
				url: `https://api.mercadolibre.com/categories/${category.id}`
			})
		})
		.then(data => ({
			...dataResponse,
			breadcrumbs: data.data.path_from_root,
		}))
		.then(data => res.status(200).send(data))
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
