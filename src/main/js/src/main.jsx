import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./store.js";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// TODO: Delete strict mode comment

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
