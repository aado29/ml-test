import React from "react";
import { Route } from "react-router-dom";

import Home from "./views/home";
import SingleProduct from "./views/single-product";

function Routes() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" exact component={SingleProduct} />
    </React.Fragment>
  )
}

export default Routes;