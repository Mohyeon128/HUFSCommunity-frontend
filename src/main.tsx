import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "pretendard/dist/web/static/pretendard.css";
import App from "./App";

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
  if (rootElement) createRoot(rootElement).render(root);
};

main();

reportWebVitals();
