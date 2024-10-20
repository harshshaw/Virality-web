// src/components/Header.js
import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import './EventHeader.css';

const EventHeader = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2 className="logo">Eventify</h2> {/* Name of your event platform */}
      </div>

      <div className="header-center">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search for events, hosts, or categories..." />
        </div>
      </div>

      <div className="header-right">
        <FaUserCircle className="profile-icon" />
        <span className="profile-name">User Name</span>
      </div>
    </header>
  );
};

export default EventHeader;
