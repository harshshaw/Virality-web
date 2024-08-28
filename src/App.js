import React from 'react';
import Header from './Components/LandingPage/Header';
import HeroSection from './Components/LandingPage/HeroSection';
import Features from './Components/LandingPage/Features';
import Footer from './Components/LandingPage/Footer';
import Leaderboard from './Components/Game/Leaderboard';
import LiveStats from './Components/Game/LiveStats';
import PlayerList from './Components/Game/PlayerList';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom"; 
import './App.css';
import HomePage from './homePage';
import Merchandise from './Components/Merchandise/merchandise';
import Tournaments from './Components/Game/Tournaments';
import TournamentDetails from './Components/Game/TournamentDetails';
import ChatScreen from './Components/Community/ChatScreen';
import InfluencerDashboard from './Components/Game/InfluencerDashboard';

const App = () => {
  const players = [
    { id: 1, name: 'Lionel Messi', category: 'Footballer', rating: '9' },
    { id: 2, name: 'Cristiano Ronaldo', category: 'Footballer', rating: '8.5' },
    { id: 3, name: 'Neymar Jr', category: 'Footballer', rating: '8.5' },
    { id: 4, name: 'Virat Kohli', category: 'Cricketer', rating: '9' },
    { id: 5, name: 'Rohit Sharma', category: 'Cricketer', rating: '9' },
    { id: 6, name: 'Tanmay Bhatt', category: 'Streamer', rating: '8' },
    { id: 7, name: 'Carry Minati', category: 'Streamer', rating: '7' },
    { id: 8, name: 'Roger Federer', category: 'Tennis Player', rating: '6' },
    { id: 9, name: 'Sanjiv Kapoor', category: 'Chef', rating: '8.5' },
  ];
  const influencer = {
    name: 'John Doe',
    followers: 25000,
    engagementRate: '8%',
    recentPosts: 15,
    avgLikes: 500,
    avgComments: 100,
  };
  return (
    <div className="App">
<Router> 
<Routes> 
    <Route path="/" element={<HomePage />} /> 
    <Route path="/playerList" element={<PlayerList players={players}/>} /> 
    <Route path="/merchandise" element={<Merchandise/>} /> 
    <Route path="/tournaments" element={<Tournaments/>}/>
    <Route path="/tournamentDetails" element={<TournamentDetails/>}/>
    <Route path="/community" element={<ChatScreen/>}/>
    <Route path="/influencerDashboard" element={<InfluencerDashboard influencer={influencer}/>}/>


</Routes> 
</Router> 
    </div>
  );
};

export default App;
