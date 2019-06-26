import "./styles.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducers from './reducers';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/header";

let store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    logger,
  ),
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Router>
          <Routes />
        </Router>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
