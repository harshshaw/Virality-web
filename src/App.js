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
import TeamSelectionPage from './Components/Game/TeamSelectionPage';

const App = () => {
  const players = [
    { id: 1, name: 'Lionel Messi', position: 'Forward', team: 'PSG' },
    { id: 2, name: 'Cristiano Ronaldo', position: 'Forward', team: 'Al-Nassr' },
    { id: 3, name: 'Neymar Jr', position: 'Forward', team: 'Al-Hilal' },
  ]
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
    <Route path="/teamSelection" element={<TeamSelectionPage/>}/>

</Routes> 
</Router> 
    </div>
  );
};

export default App;
