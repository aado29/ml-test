import React from 'react';
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    if (this.props.searchState.isLoading) {
      return (
        <div className="container">
          <div className="row row--justify-center">
            <h2>Cragando...</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h2>Home</h2>
          <p>{this.props.searchState.searchPhrase}</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    searchState: state.search,
  };
}

export default connect(mapStateToProps)(Home);