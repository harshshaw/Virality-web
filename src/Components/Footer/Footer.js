// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="apple-footer">
      <div className="footer-links">
        <div className="footer-column">
          <h4>Influencer Driven Brands</h4>
        </div>
        <div className="footer-column">
          <h4>Live Events</h4>
        </div>
        <div className="footer-column">
          <h4>AI Driven Recommendations</h4>
        </div>
        <div className="footer-column">
          <h4>Social Community</h4>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Join the Cool Community of our Influencer Driven Brands!
        </p>
        <p>
          © 2024 Virality. All rights reserved. Privacy Policy | Terms of Use |
          Sales and Refunds | Legal | Site Map
        </p>
      </div>
    </footer>
  );
};

export default Footer;
