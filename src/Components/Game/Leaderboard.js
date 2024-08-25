import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  // Example data for the leaderboard
  const data = [
    { rank: 1, name: 'John', Win: 7 },
    { rank: 2, name: 'CrazyMaker', Win: 5 },
    { rank: 3, name: 'Asif', Win: 4 },
    { rank: 4, name: 'Damien', Win: 4 },
    { rank: 5, name: 'Prakash', Win: 2 },
  ];

  return (
    <section className="leaderboard">
      <div className="container">
        <h2>Leaderboard  July</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Win</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr key={entry.rank}>
                <td>{entry.rank}</td>
                <td>{entry.name}</td>
                <td>{entry.Win}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Leaderboard;
