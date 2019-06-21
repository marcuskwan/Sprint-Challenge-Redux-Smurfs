import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { /* You need some sort of reducer */ rootReducer } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  () => rootReducer, // this is the most basic reducer. A function that returns and object. Replace it.
  composeEnhancers(
    applyMiddleware(
      /* be sure to throw in the proper middlewares here*/ thunk,
      logger
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
