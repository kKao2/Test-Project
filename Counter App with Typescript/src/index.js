import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";

const accordion = ReactDOM.createRoot(document.getElementById("root"));
accordion.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
