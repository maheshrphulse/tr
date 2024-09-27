import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/general.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/transformatter">
        <App />
    </BrowserRouter>
  </React.StrictMode>
);