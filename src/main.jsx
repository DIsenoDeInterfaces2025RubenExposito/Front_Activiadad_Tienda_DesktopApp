import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./theme/styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <a href="#main-content" className="skip-link">
      Saltar al contenido principal
    </a>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
