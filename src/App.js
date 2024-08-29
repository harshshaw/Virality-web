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
import TeamSelectionPage from './Components/Game/TeamSelectionPage';

const App = () => {
  const influencers = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "category": "fashion",
      "followers": 200000,
      "engagementRate": 4.5,
      "averageLikes": 15000,
      "averageComments": 300,
      "postsOverTime": [45, 50, 55, 60, 65]
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "category": "tech",
      "followers": 150000,
      "engagementRate": 3.8,
      "averageLikes": 9000,
      "averageComments": 200,
      "postsOverTime": [30, 35, 40, 45, 50]
    },
    {
      "id": 3,
      "name": "Catherine Green",
      "category": "lifestyle",
      "followers": 300000,
      "engagementRate": 5.2,
      "averageLikes": 18000,
      "averageComments": 400,
      "postsOverTime": [50, 55, 60, 65, 70]
    },
    {
      "id": 4,
      "name": "David Brown",
      "category": "fitness",
      "followers": 250000,
      "engagementRate": 4.1,
      "averageLikes": 12000,
      "averageComments": 350,
      "postsOverTime": [35, 40, 45, 50, 55]
    },
    {
      "id": 5,
      "name": "Emily White",
      "category": "food",
      "followers": 180000,
      "engagementRate": 4.7,
      "averageLikes": 11000,
      "averageComments": 250,
      "postsOverTime": [40, 45, 50, 55, 60]
    },
    {
      "id": 6,
      "name": "Frank Lee",
      "category": "travel",
      "followers": 220000,
      "engagementRate": 3.9,
      "averageLikes": 10000,
      "averageComments": 300,
      "postsOverTime": [45, 50, 55, 60, 65]
    },
    {
      "id": 7,
      "name": "Grace Kim",
      "category": "fashion",
      "followers": 210000,
      "engagementRate": 4.4,
      "averageLikes": 14000,
      "averageComments": 280,
      "postsOverTime": [50, 55, 60, 65, 70]
    },
    {
      "id": 8,
      "name": "Henry Garcia",
      "category": "gaming",
      "followers": 175000,
      "engagementRate": 5.0,
      "averageLikes": 16000,
      "averageComments": 450,
      "postsOverTime": [30, 35, 40, 45, 50]
    },
    {
      "id": 9,
      "name": "Isabella Martinez",
      "category": "beauty",
      "followers": 260000,
      "engagementRate": 4.6,
      "averageLikes": 17000,
      "averageComments": 370,
      "postsOverTime": [55, 60, 65, 70, 75]
    },
    {
      "id": 10,
      "name": "Jack Wilson",
      "category": "tech",
      "followers": 160000,
      "engagementRate": 3.5,
      "averageLikes": 8000,
      "averageComments": 220,
      "postsOverTime": [25, 30, 35, 40, 45]
    },
    {
      "id": 11,
      "name": "Kelly Davis",
      "category": "lifestyle",
      "followers": 270000,
      "engagementRate": 5.3,
      "averageLikes": 19000,
      "averageComments": 410,
      "postsOverTime": [60, 65, 70, 75, 80]
    },
    {
      "id": 12,
      "name": "Liam Thomas",
      "category": "sports",
      "followers": 240000,
      "engagementRate": 4.2,
      "averageLikes": 13000,
      "averageComments": 320,
      "postsOverTime": [35, 40, 45, 50, 55]
    },
    {
      "id": 13,
      "name": "Mia Hernandez",
      "category": "fitness",
      "followers": 230000,
      "engagementRate": 4.8,
      "averageLikes": 15000,
      "averageComments": 360,
      "postsOverTime": [50, 55, 60, 65, 70]
    },
    {
      "id": 14,
      "name": "Noah Robinson",
      "category": "gaming",
      "followers": 190000,
      "engagementRate": 4.9,
      "averageLikes": 17000,
      "averageComments": 400,
      "postsOverTime": [40, 45, 50, 55, 60]
    },
    {
      "id": 15,
      "name": "Olivia Walker",
      "category": "beauty",
      "followers": 280000,
      "engagementRate": 5.1,
      "averageLikes": 20000,
      "averageComments": 420,
      "postsOverTime": [65, 70, 75, 80, 85]
    },
    {
      "id": 16,
      "name": "Paul Harris",
      "category": "travel",
      "followers": 195000,
      "engagementRate": 3.6,
      "averageLikes": 9000,
      "averageComments": 250,
      "postsOverTime": [30, 35, 40, 45, 50]
    },
    {
      "id": 17,
      "name": "Quinn Moore",
      "category": "food",
      "followers": 185000,
      "engagementRate": 4.3,
      "averageLikes": 10000,
      "averageComments": 270,
      "postsOverTime": [40, 45, 50, 55, 60]
    },
    {
      "id": 18,
      "name": "Rachel Young",
      "category": "fashion",
      "followers": 290000,
      "engagementRate": 5.5,
      "averageLikes": 22000,
      "averageComments": 480,
      "postsOverTime": [70, 75, 80, 85, 90]
    },
    {
      "id": 19,
      "name": "Sam Clark",
      "category": "tech",
      "followers": 170000,
      "engagementRate": 3.9,
      "averageLikes": 9500,
      "averageComments": 230,
      "postsOverTime": [35, 40, 45, 50, 55]
    },
    {
      "id": 20,
      "name": "Tina Lewis",
      "category": "lifestyle",
      "followers": 255000,
      "engagementRate": 4.9,
      "averageLikes": 18500,
      "averageComments": 400,
      "postsOverTime": [55, 60, 65, 70, 75]
    }
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
    <Route path="/playerList" element={<PlayerList influencers={influencers}/>} /> 
    <Route path="/merchandise" element={<Merchandise/>} /> 
    <Route path="/tournaments" element={<Tournaments/>}/>
    <Route path="/tournamentDetails" element={<TournamentDetails/>}/>
    <Route path="/community" element={<ChatScreen/>}/>
    <Route path="/influencerDashboard/:influencerId" element={<InfluencerDashboard/>}/>
    <Route path="/teamSelection" element={<TeamSelectionPage/>}/>

</Routes> 
</Router> 
    </div>
  );
};

export default App;
