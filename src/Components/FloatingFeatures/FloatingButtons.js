// src/components/FloatingButtons.js
import React, { useState }  from 'react';
import { FaBroadcastTower, FaRobot  } from 'react-icons/fa';
import './FloatingButtons.css';
import { useNavigate } from 'react-router-dom';

const FloatingButtons = () => {
    const navigate = useNavigate();
    const [showSmoke, setShowSmoke] = useState(false);

  const openViralAI = () => {
    setShowSmoke(true);
    
    // Hide smoke effect after animation ends
    setTimeout(() => {
      setShowSmoke(false);
    }, 1000); // Duration should match the animation duration
  };

    function openPlatformEvent() {
        navigate('/platformEvent');
    }
  return (
    <div className="floating-buttons">
      <button className="floating-btn event-btn spotlight-hover" onClick={() => {openPlatformEvent()}}>
        <FaBroadcastTower className="icon" />
        <div className="separator" />
        <span className="btn-text">Live Events!</span>
      </button>
      <button className="floating-btn chatbot-btn spotlight-hove" onClick={() => {openViralAI()}}>
        <FaRobot className="icon" />
        <div className="separator" />
        <span className="btn-text">Viral AI</span>
      </button>
      {showSmoke && <div className="smoke-effect" />}
    </div>
  );
};

export default FloatingButtons;
