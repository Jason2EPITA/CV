// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import PolitiqueConfidentialiteCleanSwipe from "./pages/PolitiqueConfidentialiteCleanSwipe";

import "./index.css";
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Page principale */}
        <Route path="/" element={<App />} />

        {/* Page politique de confidentialité */}
        <Route
          path="/politiqueconfidentialitecleanswipe"
          element={<PolitiqueConfidentialiteCleanSwipe />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);