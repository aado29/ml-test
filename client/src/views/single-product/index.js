import React from 'react';
import apiService from './../../services/api';
import './style.scss';

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      product: null,
    };
    this.getProduct = this.getProduct.bind(this);
  }
  
  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    const productId = this.props.match.params.id;
    this.setState({isLoading: true})
    apiService.getProduct(productId)
      .then(product => this.setState({product}))
      .catch(err => this.props.history.push('/'))
      .finally(() => this.setState({isLoading: false}));
  }

  render() {
    const { isLoading, product } = this.state;
    if (isLoading) {
      return (
        <div className="single-product">
          <div className="container">
            <div className="row row--justify-center">
              <h2>Cargando...</h2>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="single-product">
          {!!product && <div className="container single-product__inner">
            <div className="row">
              <div className="single-product__image">
                <img src={product.picture} alt={product.title} className="single-product__image__content"/>
              </div>
              <div className="single-product__hightligth">
                <p className="t-size-1">{product.condition}</p>
                <h1 className="t-size-4 t-bold">{product.title}</h1>
                <h2 className="t-size-5 t-regular">{product.price.currency} {product.price.amount}</h2>
              </div>
            </div>
            <div className="single-product">
              <h1 className="single-product__title-description">Descrición del producto</h1>
              <p className="single-product__description">{product.description}</p>
            </div>
          </div>}
        </div>
      )
    }
  }
};

export default SingleProduct;
