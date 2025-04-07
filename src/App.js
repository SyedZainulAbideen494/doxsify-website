import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoxsifyLandingPage from "./landing page/DoxsifyLandingPage"; // Ensure path is correct
import ComingSoonPage from "./coming coon/ComingSoonPage";

function App() {
  console.log("App is running");

  return (
    <Router>
      <Routes>
        <Route path="*" element={<ComingSoonPage />} /> {/* Renders DoxsifyLandingPage */}
      </Routes>
    </Router>
  );
}

export default App;
