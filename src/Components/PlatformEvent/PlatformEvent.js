// src/App.js
import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
import EventDetails from './EventDetails';
import VideoPanel from './VideoPanel';
import './PlatformEvent.css';
import EventHeader from './EventHeader';

function PlatformEvent() {
  const [events, setEvents] = useState([
    { id: 1, name: "Event 1", description: "Description for Event 1", videoUrl: "https://www.example.com/video1" },
    { id: 2, name: "Event 2", description: "Description for Event 2", videoUrl: "https://www.example.com/video2" },
    // Add more events here...
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
        <EventHeader />
        <div className="app-content">
            <LeftPanel events={filteredEvents} onSearch={handleSearch} onSelectEvent={setSelectedEvent} />
            <EventDetails selectedEvent={selectedEvent} />
            <VideoPanel videoUrl={selectedEvent?.videoUrl || ""} />
      </div>
    </div>
  );
}

export default PlatformEvent;
