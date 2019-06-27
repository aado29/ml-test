import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

class CardItem extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="card-item">
        <Link to={`/product/${data.id}`}>{data.title}</Link>
        <p>{JSON.stringify(data.price)}</p>
      </div>
    )
  }
};

CardItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardItem;