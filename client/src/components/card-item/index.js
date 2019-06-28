import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

class CardItem extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Link to={`/product/${data.id}`} className="card-item">
        <div className="card-item__thumbnail">
          <img src={data.picture} alt={data.title} className="card-item__thumbnail__content"/>
        </div>
        <div className="card-item__body">
          <div className="t-size-4">{data.price.currency} {data.price.amount}</div>
          <p className="t-size-3">{data.title}</p>
        </div>
      </Link>
    )
  }
};

CardItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardItem;
