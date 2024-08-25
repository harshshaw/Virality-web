import React from 'react';
import  './PlayerList.css';

const PlayerCard = ({ player, onAddToWishlist }) => {
    return (
        <div className="player-card">
            <h3>{player.name}</h3>
            <p>{player.position}</p>
            <p>{player.team}</p>
            <button onClick={() => onAddToWishlist(player)}>Add to Wishlist</button>
        </div>
    );
};


export default PlayerCard;
