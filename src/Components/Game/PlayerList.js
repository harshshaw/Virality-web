import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import Wishlist from './Wishlist';
import './CSS/PlayerList.css'
import Navbar from '../LandingPage/Navbar';
import Header from '../LandingPage/Header';
const PlayerList = ({ influencers }) => {
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

    const filteredInfluencers = influencers.filter((influencer) =>
        influencer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        
        <div className="player-list-container" style={{position: "absolute", backgroundColor: "white", width: "100%", height: "100%", textAlign: "center", verticalAlign: "middle"}}>
           <Header/>
            <h1 style={{color: "black"}}>Influencer Search</h1>
            {/* <input
                style={{position: "relative", width: "50%", display: "block", left: "25%", background: "transparent", borderTop: "none", borderLeft: "none", borderRight: "none", borderBottom: "2px solid black"}}
                className="form-control me-2"
                type="text"
                placeholder="Search Influencers..."
                value={searchTerm}
                onChange={handleSearch}
            /> */}
            <div className="search-box">
                <input type="text" placeholder="Search Influencers..." value={searchTerm}
                onChange={handleSearch}
                />
            </div>
            <div className="player-list" style={{position: "relative", placeItems: "center"}}>
                {filteredInfluencers.map((influencer) => (
                    <PlayerCard key={influencer.id} influencer={influencer} onAddToWishlist={handleAddToWishlist} />
                ))}
            </div>
            {/* <Wishlist wishlist={wishlist} /> */}
        </div>
    );
};

export default PlayerList;
