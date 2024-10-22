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
      <h1>{selectedEvent.name}</h1>
      <p>{selectedEvent.description}</p>
      <div className="event-buttons">
        {selectedEvent.eventStarted ? <button className="join-button">Join Event</button> : <></>}
        {!selectedEvent.eventStarted ? <button className="calendar-button">Mark My Calendar</button> : <></>}
        {!selectedEvent.eventStarted ? <button className="remind-button">Remind Me</button> : <></>}
      </div>

    </div>
  );
};

export default EventDetails;
