import { store } from "app/store";
import React from "react";
import ReactDOM from "react-dom/client";
import "app/styles/index.css";
import App from "app/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
