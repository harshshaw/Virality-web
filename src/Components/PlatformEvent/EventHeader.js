// src/components/Header.js
import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import './EventHeader.css';

const EventHeader = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2 className="logo">Our Events</h2> {/* Name of your event platform */}
      </div>

      <div className="header-right">
        <FaUserCircle className="profile-icon" />
      </div>
    </header>
  );
};

export default EventHeader;
