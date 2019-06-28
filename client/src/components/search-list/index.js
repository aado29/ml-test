import React from "react";
import { connect } from 'react-redux';
import CardItem from './../card-item';

import "./style.scss";

class SearchList extends React.Component {
  render() {
    const { searchState } = this.props;

    if (searchState.isLoading) {
      return (
        <div className="search-list">
          <div className="container">
            <div className="row row--justify-center">
              <h2>Cargando...</h2>
            </div>
          </div>
        </div>
      );
    } else {
      if (!!searchState.data.length) {
        return (
          <div className="search-list">
            <div className="container">
              <div className="search-list__inner">
                {searchState.data.map(item => <CardItem key={item.id} data={item}/>)}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="search-list">
            <div className="container">
              <div className="row row--justify-center">
                <div className="search-list__no-result">
                  <h2>Sin resultados</h2>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    searchState: state.search,
  };
}

export default connect(mapStateToProps)(SearchList);
