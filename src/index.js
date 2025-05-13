import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("base url ->", "/ecomzy/")

root.render(
  <BrowserRouter basename={"/ecomzy"} >

    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);
