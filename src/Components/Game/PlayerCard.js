import React from 'react';
import  './PlayerList.css';
import background from "./v logo.jpg";

const PlayerCard = ({ player, onAddToWishlist }) => {
    return (
        <div className="player-card" style={{backgroundColor: "white", backgroundImage:`url(${background})` }}>
            <h3 style={{color: "white"}}>{player.name}</h3>
            <p style={{color: "white"}}>{player.category}</p>
            <p style={{color: "white"}}>{player.rating}</p>
            <button className="btn btn-info" onClick={() => onAddToWishlist(player)}>Add to Wishlist</button>
        </div>
    );
};


export default PlayerCard;
