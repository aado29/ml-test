import React from 'react';
import CardItem from './../../components/card-item';
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    if (this.props.searchState.isLoading) {
      return (
        <div className="container">
          <div className="row row--justify-center">
            <h2>Cargando...</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          {!this.props.searchState.data.length && (
            <center>
              <h1>Sin Resultados</h1>
            </center>
          )}
          {this.props.searchState.data.map(item => <CardItem key={item.id} data={item}/>)}
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