import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import popper from "popper.js";

import paginaInicio from "../src/Pages/Pages_InicioPP";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <paginaInicio />
  </React.StrictMode>,
  rootElement
);
