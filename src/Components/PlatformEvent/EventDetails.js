// src/components/EventDetails.js
import React from 'react';
import './EventDetails.css';

const EventDetails = ({ selectedEvent }) => {
  if (!selectedEvent) {
    return <div className="event-details">Select an event to see the details</div>;
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
