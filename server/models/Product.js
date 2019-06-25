function getDecimals(num) {
  if (Math.floor(num) !== num)
    return num.toString().split(".")[1].length || 0;
  return 0;
}

class Product {
	constructor(
		id,
		title,
		price,
		picture,
		condition,
		free_shipping,
		sold_quantity,
		description
	) {
		this.id = id || null;
		this.title = title || null;
		this.price = price || null;
		this.picture = picture || null;
		this.condition = condition || null;
		this.free_shipping = free_shipping;
		this.sold_quantity = sold_quantity;
		this.description = description || null;
	};

	static fromApi(product, bool = false) {
		const picture = bool ? product.thumbnail : product.pictures[0].url;
		const price = {
			amount: product.price,
			currency: product.currency_id,
			decimals: getDecimals(product.price),
		}
		return new Product(
			product.id,
			product.title,
			price,
			picture,
			product.condition,
			product.free_shipping,
			product.sold_quantity
		);
	}

	static allFromApi(data) {
		const products = data.results.map(result => {
			const product = {
				id: result.id,
				title: result.title,
				price: result.price,
				currency_id: result.currency_id,
				decimals: getDecimals(result.price),
				thumbnail: result.thumbnail,
				condition: result.condition,
				shipping: result.shipping.free_shipping,
				sold_quantity: result.sold_quantity
			}
			return this.fromApi(product, true);
		});

		return products;
	}

	setDescription(description) {
		this.description = description;
		return this;
	}
}

module.exports = Product;
