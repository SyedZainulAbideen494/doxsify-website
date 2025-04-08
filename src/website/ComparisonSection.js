import React from 'react';
import './ComparisonSection.css';
import comparisonImage from '../assets/doxChart.png'; // Add your comparison image path here

const ComparisonSection = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-content">
        <img src={comparisonImage} alt="Doctor vs AI" className="comparison-img" />
      </div>
    </section>
  );
};

export default ComparisonSection;
