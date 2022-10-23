import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// Import redux store:
import store from "./store";

import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
