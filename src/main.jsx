// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import LocationPage from "./Components/LocationPage";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
);
