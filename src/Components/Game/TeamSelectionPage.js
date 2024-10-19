import React, { useState } from 'react';
import './CSS/TeamSelectionPage.css';
import Header from '../LandingPage/Header';

const players = [
  { id: 1, name: 'Gaurav Taneja' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 2, name: 'Carryminati',follower:"1M",post:"234",viralPoints:"1.3" },
  { id: 3, name: 'Vidya balan' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 4, name: 'Sunny Leone' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 5, name: 'Tiger bandar' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 6, name: 'Samay Kharab raina' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 7, name: 'Chote miyan' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 8, name: 'Dolly chaiwala' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 9, name: 'Player 9' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 1, name: 'Player 1' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 2, name: 'Player 2',follower:"1M",post:"234",viralPoints:"1.3" },
  { id: 3, name: 'Player 3' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 4, name: 'Player 4' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 5, name: 'Player 5' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 6, name: 'Player 6' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 7, name: 'Player 7',follower:"1M",post:"234",viralPoints:"1.3" },
  { id: 8, name: 'Player 8' ,follower:"1M",post:"234",viralPoints:"1.3"},
  { id: 9, name: 'Player 9',follower:"1M",post:"234",viralPoints:"1.3" },
];

const TeamSelectionPage = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Function to add a player
  const handlePlayerAdd = (player) => {
    if (!selectedPlayers.some((p) => p.id === player.id)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  // Function to remove a player
  const handlePlayerRemove = (id) => {
    setSelectedPlayers(selectedPlayers.filter((player) => player.id !== id));
  };

  return (
    <>
    <Header/>
    <div className="team-selection-container">
      <div className="sidebar">
        <h3>Select Influencer</h3>
        <input type="text" placeholder="Search players..." />
        <div className="player-list">
          {players.map((player) => (
            <div key={player.id} className="player-list-item">
              <p>{player.name}</p>
              <p>{player.follower}</p>
              <p>{player.post}</p>
              <p>{player.viralPoints}</p>
              <button onClick={() => handlePlayerAdd(player)}>Add</button>
            </div>
          ))}
        </div>
      </div>

      <div className="field-background">
        <div className="players-grid">
          {selectedPlayers.map((player) => (
            <div
              key={player.id}
              className="player-card selected"
            >
              {player.name}
              <button onClick={() => handlePlayerRemove(player.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="button-container">
        <button className="start-game-button">Start Game</button>
        <button className="select-more-button">Select More</button>
      </div>
    </div>
    </>

  );
};

export default TeamSelectionPage;
