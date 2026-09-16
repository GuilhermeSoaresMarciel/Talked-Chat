import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/home.jsx";
import "./index.css";

createRoot(document.querySelector("body")).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
