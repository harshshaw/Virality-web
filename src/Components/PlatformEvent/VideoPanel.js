// src/components/VideoPanel.js
import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPanel.css';

const VideoPanel = ({ videoUrl }) => {
  return (
    <div className="video-panel">
      <ReactPlayer url={videoUrl} playing controls width="100%" height="100%" />
    </div>
  );
};

export default VideoPanel;
