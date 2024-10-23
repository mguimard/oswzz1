import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Chocolatine from "./Chocolatine.jsx";

createRoot(document.getElementById("react-js-app-1")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(document.getElementById("react-js-app-2")).render(
  <StrictMode>
    <Chocolatine />
  </StrictMode>
);
