import React from 'react';
import './LiveStats.css';

const LiveStats = () => {
  // Example data for live player stats
  const stats = [
    { playerName: 'Flying Beast', Followers: 10, Post: 200, ViralRate: -1 },
    { playerName: 'SamayRaina', Followers: 2, Post: 59, ViralRate: +20 },
    { playerName: 'Mr Beast', Followers: 211, Post: 600, ViralRate: +12 },
    { playerName: 'Tanmay Bhatt', Followers: 2, Post: 123, ViralRate: -10 },
    { playerName: 'BeerBiceps', Followers: 3.4, Post: 1200, ViralRate: +123 },

  ];

  return (
    <section className="live-stats">
      <div className="container">
        <h2>Live Influencers Stats</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stats-card" key={index}>
              <div className="card-header">
                <h3>{stat.playerName}</h3>
                <div className="card-icons">
                  <i className="fas fa-arrow-up"></i>
                  <i className="fas fa-arrow-down"></i>
                </div>
              </div>
              <p><strong>Followers:</strong> {stat.Followers} M</p>
              <p><strong>Post:</strong> {stat.Post}</p>
              <p><strong>ViralRate:</strong> {stat.ViralRate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
