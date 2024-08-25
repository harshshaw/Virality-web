import React from 'react';
import './PlayerList.css'
const Wishlist = ({ wishlist }) => {
    return (
        <div className="wishlist">
            <h2>Team Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>No players added to the wishlist yet.</p>
            ) : (
                <ul>
                    {/* {wishlist.map((player) => (
                        <li key={player.id}>{player.name} - {player.position} ({player.team})</li>
                    ))} */}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;
