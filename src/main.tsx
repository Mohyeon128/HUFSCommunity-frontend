import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";
import "pretendard/dist/web/static/pretendard.css";

import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

const root = (
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

const main = () => {
  if (rootElement && rootElement.hasChildNodes()) {
    hydrate(root, rootElement);
  } else {
    render(root, rootElement);
  }
};

main();

reportWebVitals();
