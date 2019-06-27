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
        <div className="container">
          <div className="row row--justify-center">
            <h2>Cargando...</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          {!!product && (
            <div>
              <h2>{product.title}</h2>
              <code>{JSON.stringify(product)}</code>
            </div>
          )}
        </div>
      )
    }
  }
};

export default SingleProduct;