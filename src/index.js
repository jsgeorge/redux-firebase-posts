import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./components/app";

ReactDOM.render(
  //<Provider store={createStoreWithMiddleware(reducers)}>
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
