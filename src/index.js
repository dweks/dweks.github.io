import {BrowserRouter} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
