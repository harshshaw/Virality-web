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
        
        <div className="player-list-container">
           <Header/>
            <h1>Influencer Search</h1>
            <input
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
