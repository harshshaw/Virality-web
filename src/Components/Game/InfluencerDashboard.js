import React from 'react';
import { Bar } from 'react-chartjs-2';
import './InfluencerDashboard.css';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import Header from '../LandingPage/Header';

Chart.register(CategoryScale);

const InfluencerDashboard = ({ influencer }) => {
  const followerGrowthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Follower Growth',
        data: [12000, 14000, 16000, 18000, 22000, 25000],
        backgroundColor: '#007bff',
      },
    ],
  };

  const engagementRateData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Engagement Rate (%)',
        data: [5, 6, 7, 5, 8, 9],
        backgroundColor: '#28a745',
      },
    ],
  };

  return (
    <>
    <Header />
    <div className="analytics-container">
      <h2>Influencer Analytics: {influencer.name}</h2>
      
      <div className="stats-overview">
        <div className="stat-card">
          <h3>Followers</h3>
          <p>{influencer.followers.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Engagement Rate</h3>
          <p>{influencer.engagementRate}</p>
        </div>
        <div className="stat-card">
          <h3>Recent Posts</h3>
          <p>{influencer.recentPosts}</p>
        </div>
        <div className="stat-card">
          <h3>Average Likes per Post</h3>
          <p>{influencer.avgLikes.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Average Comments per Post</h3>
          <p>{influencer.avgComments.toLocaleString()}</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart">
          <h3>Follower Growth Over Time</h3>
          <Bar data={followerGrowthData} />
        </div>

        <div className="chart">
          <h3>Engagement Rate Over Time</h3>
          <Bar data={engagementRateData} />
        </div>
      </div>
    </div>
    </>
  );
};

export default InfluencerDashboard;
