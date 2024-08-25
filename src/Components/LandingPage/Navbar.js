import React from 'react';
import './Css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>FantasyGaming</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="navbar-signup">Sign Up</button>
    </nav>
  );
};

export default Navbar;