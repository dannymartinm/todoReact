import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
import ReduxTest from "./ReduxTest";

const AppStore = () => (
  <Provider store={store}>
    <ReduxTest />
  </Provider>
);

ReactDOM.render(<AppStore />, document.getElementById("root"));
registerServiceWorker();
