// src/components/EventDetails.js
import React from 'react';
import './EventDetails.css';
import collageBackground from '../../assets/images/event_background.png';

const EventDetails = ({ selectedEvent }) => {
  if (!selectedEvent) {
    return (
      <div className="background-container">
        <h1>Live Exclusive Events</h1>
      </div>
    );
  }

  return (
    <div className="event-details">
      <h2>{selectedEvent.name}</h2>
      <p>{selectedEvent.description}</p>
      <button className="join-button">Join Event</button>
    </div>
  );
};

export default EventDetails;
