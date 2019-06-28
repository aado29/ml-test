import React from "react";
import { connect } from "react-redux";

import "./style.scss";

class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="breadcrumb">
        <div className="container">
          <div className="row row--align-center">
            <div className="breadcrumb__inner">
              {this.props.breadcrumb.map(cat => <span key={cat.id}>{cat.name}</span>)}
            </div>
          </div>
          <div className="row">
          </div>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    breadcrumb: state.search.breadcrumb,
  };
};

export default connect(mapStatetoProps)(Breadcrumb);