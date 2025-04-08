import React from 'react';
import './HowItWorks.css';
import howItWorksImage from '../assets/img-1st-block.png'; // Add your image here

const HowItWorks = () => {
  return (
    <section className="how-it-works__section">
      <div className="how-it-works__content">
        <div className="how-it-works__text">
          <h2 className="how-it-works__title">How Doxsify Works</h2>
          <p className="how-it-works__description">
            Engage with Doxsify, where cutting-edge AI algorithms, fueled by state-of-the-art NLP and medical imaging models, analyze your symptoms or detailed reports. Our advanced deep learning architecture cross-references massive clinical databases, enabling unparalleled diagnostic precision.
          </p>
          <p className="how-it-works__description">
            The AI-driven system integrates real-time medical insights, leveraging predictive analytics and knowledge graphs to map symptom-treatment correlations with near-human accuracy. With access to millions of anonymized records, Doxsify continuously learns and adapts, ensuring the most up-to-date diagnostics.
          </p>
          <p className="how-it-works__description">
            In milliseconds, Doxsify synthesizes personalized treatment plans, diagnoses, and prescriptions, providing actionable insights faster than human doctors could dream.
          </p>
        </div>
        <div className="how-it-works__image">
          <img src={howItWorksImage} alt="How Doxsify Works" className="how-it-works__img" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
