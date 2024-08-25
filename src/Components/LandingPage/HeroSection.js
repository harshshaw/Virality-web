import React from 'react';
import './Css/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the Fantasy Realm</h1>
        <p>Embark on epic adventures in a world of magic and mystery.</p>
        <a href="#signup" className="cta-button">Join Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
