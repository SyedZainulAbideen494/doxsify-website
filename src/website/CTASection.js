/* CTA Section HTML (React) */
import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Try Doxsify Today</h2>
        <p className="cta-subtext">
          Experience the future of healthcare with AI-driven precision. Get personalized diagnosis, prescriptions, and treatment plans in an instant.
        </p>
        <a href="https://doxsify.vercel.app/download">
        <button className="cta-btn">Get App</button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
