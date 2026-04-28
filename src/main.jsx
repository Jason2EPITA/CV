// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import PolitiqueConfidentialiteCleanSnap from "./pages/PolitiqueConfidentialiteCleanSnap";
import PolitiqueConfidentialiteGbesoin from "./pages/PolitiqueConfidentialiteGbesoin";
import ConditionsUtilisationGbesoin from "./pages/ConditionsUtilisationGbesoin";
import MentionsLegalesGbesoin from "./pages/MentionsLegalesGbesoin";

import "./index.css";
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Page principale */}
        <Route path="/" element={<App />} />

        {/* Page politique de confidentialité */}
        <Route
          path="/politiqueconfidentialitecleansnap"
          element={<PolitiqueConfidentialiteCleanSnap />}
        />

        {/* Pages cachées Gbesoin */}
        <Route
          path="/politiqueconfidentialitegbesoin"
          element={<PolitiqueConfidentialiteGbesoin />}
        />
        <Route
          path="/conditionsutilisationgbesoin"
          element={<ConditionsUtilisationGbesoin />}
        />
        <Route
          path="/mentionslegalesgbesoin"
          element={<MentionsLegalesGbesoin />}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);