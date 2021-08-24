import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd-mobile/dist/antd-mobile.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store, { persistor } from "./reduce/index";
import { PersistGate } from "redux-persist/lib/integration/react";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
