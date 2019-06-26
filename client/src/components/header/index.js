import React from "react";
import SearchForm from './../search-form';

import "./style.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row row--align-center">
            <div className="header__logo">
              <h1>Logo</h1>
            </div>
            <div className="header__search-form">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}