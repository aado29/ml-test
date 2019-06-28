import React from "react";
import { connect } from "react-redux";
import SearchForm from './../search-form';

import "./style.scss";
import Logo from './logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row row--align-center">
            <div className="header__logo">
              <img src={Logo} alt="logo mercadolibre"/>
            </div>
            <div className="header__search-form">
              <SearchForm />
            </div>
          </div>
          <div className="row">
            {JSON.stringify(this.props.searchData.breadcrumbs)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    searchData: state.search,
  };
};

export default connect(mapStatetoProps)(Header);