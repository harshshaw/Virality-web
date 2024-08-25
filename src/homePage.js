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
import Test from './Components/Test';

const HomePage = () => {
  const players = [
    { id: 1, name: 'Lionel Messi', position: 'Forward', team: 'PSG' },
    { id: 2, name: 'Cristiano Ronaldo', position: 'Forward', team: 'Al-Nassr' },
    { id: 3, name: 'Neymar Jr', position: 'Forward', team: 'Al-Hilal' },
  ]
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <Leaderboard />
      <LiveStats />
      {/* 
      <PlayerList players={players} /> */}
      <Footer />
     
    </div>
  );
};
export default HomePage;