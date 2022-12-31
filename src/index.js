import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Main />
    </HashRouter>
  </React.StrictMode>
);
