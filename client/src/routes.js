import React from "react";
import { Route } from "react-router-dom";

import Home from "./views/home";

function Routes() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
    </React.Fragment>
  )
}

export default Routes;