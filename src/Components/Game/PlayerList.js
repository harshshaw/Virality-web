import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import Wishlist from './Wishlist';
import './PlayerList.css'
import Navbar from '../LandingPage/Navbar';
import Header from '../LandingPage/Header';
const PlayerList = ({ players }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [wishlist, setWishlist] = useState([]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddToWishlist = (player) => {
        // Avoid adding duplicate players to the wishlist
        if (!wishlist.some((item) => item.id === player.id)) {
            setWishlist([...wishlist, player]);
        }
    };

    const filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        
        <div className="player-list-container" style={{position: "absolute", backgroundColor: "black", width: "100%", height: "100%", textAlign: "center", verticalAlign: "middle"}}>
           <Header/>
            <h1 style={{color: "white"}}>Influencer Search</h1>
            <input
                style={{position: "relative,", width: "50%", display: "block", left: "25%", background: "transparent", borderTop: "none", borderLeft: "none", borderRight: "none"}}
                className="form-control me-2"
                type="text"
                placeholder="Search Influencers..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="player-list">
                {filteredPlayers.map((player) => (
                    <PlayerCard key={player.id} player={player} onAddToWishlist={handleAddToWishlist} />
                ))}
            </div>
            {/* <Wishlist wishlist={wishlist} /> */}
        </div>
    );
};

export default PlayerList;
