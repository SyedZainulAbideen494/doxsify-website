import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoxsifyLandingPage from "./landing page/DoxsifyLandingPage"; // Ensure path is correct
import ComingSoonPage from "./coming coon/ComingSoonPage";
import Website from "./website/websiteMain";
import './App.css'

function App() {
  console.log("App is running");

  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<ComingSoonPage />} />,
        <Route path="*"  element={<Website />} />,
      </Routes>
    </Router>
  );
}

export default App;
