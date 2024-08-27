import React from 'react';
import './Css/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the Virality</h1>
        <p>Embark on epic Strategy Game !.</p>
        <a href="#signup" className="cta-button">Join Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
