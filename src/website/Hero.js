import React from 'react';
import './Hero.css';
import Header from './Header';
import phoneMockup from '../assets/phone-moke-up.png';

const Hero = () => {
  return (
    <>

      <section className="hero__section">
        <div className="hero-content__hero">
          <div className="hero-text__hero">
            <h1 className="hero-title__hero">
              Reimagine Healthcare<br />
              with <span className="highlight__hero">Doxsify</span>
            </h1>
            <p className="hero-subtext__hero">
              Diagnose. Prescribe. Treat. Instantly.<br />
              Built to out-think doctors.
            </p>
            <a href="#demo" className="cta-button__hero">Launch the Future</a>
          </div>
          <div className="mockup-container__hero">
            <img src={phoneMockup} alt="App UI" className="phone-mockup__hero" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
