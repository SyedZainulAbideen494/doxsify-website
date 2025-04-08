import React from "react";
import "./DoxsifyLandingPage.css";

const DoxsifyLandingPage = () => {
  return (
    <div className="landing-container">
      <div className="card">
        <div className="logo" />
        <h1>Doxsify is here.</h1>
        <p className="figma-text">
          AI-powered healthcare that actually works.
        </p>

        <a href="https://your-app-link.com" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Get the App</button>
        </a>

        <p className="note">Just intelligence.</p>
      </div>
    </div>
  );
};

export default DoxsifyLandingPage;
