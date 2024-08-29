import React from 'react';
import  './PlayerList.css';
import background from "./v logo.jpg";
import { useNavigate } from 'react-router-dom';

const PlayerCard = ({ influencer, onAddToWishlist }) => {
    const url = "https://t3.ftcdn.net/jpg/05/70/73/26/360_F_570732677_aFvTk3cNRpWl0zldGITPJdHHz7jhSFC3.jpg";
    const navigate = useNavigate();
    const handleCardClick = (influencerId) => {
        const link = '/influencerDashboard/' + influencerId;
        // navigate(`${link}`, {
        //     state: influencer
        // });
        console.log(influencer);
        navigate(`${link}`, { state: { influencer: influencer } });
    };
    return (
        <div className="feature-card" style={{backgroundImage:"url("+url+")", margin: "10px", width: "15%"}} onClick={() => handleCardClick(influencer.id)}>
            <h3 style={{color: "white"}}>{influencer.name}</h3>
            <p style={{color: "white"}}>{influencer.category}</p>
        </div>
    );
};


export default PlayerCard;
