// src/components/LeftPanel.js
import React from 'react';
import './LeftPanel.css';

const LeftPanel = ({ events, onSearch, onSelectEvent }) => {
  return (
    <div className="left-panel">
      <input 
        type="text" 
        className="left-panel-search" 
        placeholder="See whats in store..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <ul className="event-list">
        {events.map(event => (
          <li key={event.id} onClick={() => onSelectEvent(event)}>
            {event.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftPanel;
