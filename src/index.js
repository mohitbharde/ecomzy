import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(process.env.PUBLIC_URL)

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);
