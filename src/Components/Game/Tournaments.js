import React, { useState } from 'react';
import './Tournaments.css'; // Include your styles here
import { useNavigate } from 'react-router-dom';
import Header from '../LandingPage/Header';

// Dummy data for tournaments
const tournamentData = [
  {
    id: 1,
    name: 'Tournament 1',
    amount: 100,
    startDate: '2024-09-01',
    participants: 50,
  },
  {
    id: 2,
    name: 'Tournament 2',
    amount: 200,
    startDate: '2024-09-05',
    participants: 75,
  },
  // Add more tournament data as needed
];

const Tournaments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleProductClick = (link) => {
    navigate(`${link}`);
  };
  const filteredTournaments = tournamentData.filter((tournament) => {
    return (
      tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedFilter === '' || tournament.amount <= selectedFilter)
    );
  });

  
  return (
    <>
    <Header/>
    <div className="tournaments-container">
      <div className="sidebar">
        <h3>Filters</h3>
        <label>
          Entry Amount:
          <select value={selectedFilter} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="100">Up to $100</option>
            <option value="200">Up to $200</option>
            {/* Add more filters as needed */}
          </select>
        </label>
      </div>

      <div className="main-content">
        <input
          type="text"
          placeholder="Search Tournaments..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />

        <div className="tournament-grid">
          {filteredTournaments.map((tournament) => (
            <div key={tournament.id} className="tournament-card" >
              <h3>{tournament.name}</h3>
              <p>
                <i className="fas fa-dollar-sign"></i> Entry Amount: ${tournament.amount}
              </p>
              <p>
                <i className="fas fa-calendar-alt"></i> Starts on: {tournament.startDate}
              </p>
              <p>
                <i className="fas fa-users"></i> Participants: {tournament.participants}
              </p>
              <button className="btn-enter" onClick={()=>handleProductClick("/tournamentDetails")}>Enter Tournament</button>
              <button className="btn-form-team">Form a Team</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>

  );
};

export default Tournaments;
