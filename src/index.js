import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider, connect } from "react-redux";
import store from "./store";
import ReduxTest from "./ReduxTest";

const AppStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppStore />, document.getElementById("root"));
registerServiceWorker();
