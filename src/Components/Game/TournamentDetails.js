import React, { useState } from 'react';
import './TournamentDetails.css';
import Header from '../LandingPage/Header';

const TournamentDetails = () => {
  const [showChat, setShowChat] = useState(false);
  const tournament = [
    {
      player: 1,
      name: 'Tournament 1',
      team: 100,
      status: '2024-09-01',
      participants: 50,
    },
    {
        player: 1,
        name: 'Tournament 1',
        team: 100,
        status: '2024-09-01',
        participants: 50,
      },
    // Add more tournament data as needed
  ];
  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

  return (
    <>
    <Header></Header>
    <div className="tournament-details-container">
      <div className="top-section">
        <button className="btn-pay">Pay to Enter</button>
        <button className="btn-form-team">Form a Team</button>
      </div>

      <div className="carousel">
        <div className="carousel-slide">Slide 1 Content</div>
        <div className="carousel-slide">Slide 2 Content</div>
        <div className="carousel-slide">Slide 3 Content</div>
      </div>

      <h3>Registered Players</h3>
      <table className="players-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tournament.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn-chat" onClick={handleChatToggle}>
        {showChat ? 'Close Chat' : 'Open Chat'}
      </button>

      {showChat && (
        <div className="chat-popup">
          <h4>Chat</h4>
          <div className="chat-messages">
            {/* Chat messages will go here */}
          </div>
          <input type="text" placeholder="Type a message..." />
        </div>
      )}
    </div>
    </>

  );
};

export default TournamentDetails;
