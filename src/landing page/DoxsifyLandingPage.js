import './DoxsifyLandingPage.css';

function DoxsifyLandingPage() {
  return (
    <div className="landing-container">
      <section className="hero-section">
        <div className="glass-card">
          <h1 className="title">Welcome to Doxsify</h1>
          <p className="subtitle">AI-Powered Healthcare, Reinvented for the Future.</p>
          <button className="launch-btn">Enter The Future</button>
        </div>
        <div className="background-animation"></div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h2>Instant AI Diagnosis</h2>
          <p>Experience unparalleled accuracy in real-time medical analysis powered by advanced AI.</p>
        </div>
        <div className="feature-card">
          <h2>Dynamic Treatment Plans</h2>
          <p>Personalized, adaptive treatment suggestions based on real-time data.</p>
        </div>
        <div className="feature-card">
          <h2>Revolutionizing Healthcare</h2>
          <p>AI that continuously evolves with the latest medical research and patient data.</p>
        </div>
      </section>

      <footer>
        <p>© 2025 Doxsify. Your trusted healthcare partner.</p>
      </footer>
    </div>
  );
}

export default DoxsifyLandingPage;
