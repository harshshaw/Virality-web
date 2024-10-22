// src/components/VideoPanel.js
import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPanel.css';
import event_exp1 from '../../assets/images/event_exp1.webp';
import event_exp2 from '../../assets/images/event_exp2.webp';
import event_exp3 from '../../assets/images/event_exp3.webp';

const VideoPanel = ({ videoUrl }) => {

  function displayThumbnailContent() {
    if(videoUrl != "") {
      return (
        <div className="video-panel">
          <h2 style={{marginTop: "15%"}}>Join us Live</h2>
          <ReactPlayer
            url={videoUrl} // Replace with your video URL
            playing={true}  // Autoplay the video
            loop={true}     // Set to loop
            muted={true}    // Mute the video if necessary
            controls={false} // Disable the player controls
            width="100%"    // Set video width
            height="100%"   // Set video height
          />
        </div>
      );
    } else {
      return (
        <div className="video-panel">
          <h1 style={{marginTop: "15%"}}>Experience it Unleash!</h1>
          <div className="image-stack">
            <img src={event_exp1} alt="Event Experience 1" />
            <img src={event_exp2} alt="Event Experience 2" />
            <img src={event_exp3} alt="Event Experience 3" />
          </div>
        </div>
      );
    }
  }

  return (
    displayThumbnailContent()
  );
};

export default VideoPanel;
