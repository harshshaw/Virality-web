// src/App.js
import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
import EventDetails from './EventDetails';
import VideoPanel from './VideoPanel';
import './PlatformEvent.css';
import EventHeader from './EventHeader';

function PlatformEvent() {
  const [events, setEvents] = useState([
    { id: 1, name: "Glow Up Live: Beauty and Wellness Extravaganza", description: "Join us for an exclusive live event hosted by renowned beauty influencer, Samantha Lee, as she unveils her highly anticipated skincare line, Radiant Glow. Set against the backdrop of a stunning virtual studio, Samantha will demonstrate the transformative effects of her products through live skincare routines. Attendees can engage in a Q&A session, where Samantha will share her personal skincare journey, tips for healthy skin, and the inspiration behind each product. Plus, exclusive discounts and giveaways will be available to live viewers only!", videoUrl: "https://videos.pexels.com/video-files/14066876/14066876-hd_806_1440_30fps.mp4", channelId: "virality_testing", eventStarted: true },
    { id: 2, name: "Fitness Revolution: Gear Up with Jamie", description: "Get ready to sweat with fitness guru Jamie Turner in a dynamic live event where she launches her new athleisure collection, Active Spirit. The event will feature a high-energy workout session led by Jamie, showcasing how her stylish, functional gear performs in action. Participants can follow along from home and see firsthand how the collection enhances performance and comfort. Jamie will also host a live chat to discuss the design process and answer fitness-related questions. Limited-time offers and a chance to win workout gear will keep the energy high throughout the session!", videoUrl: "https://videos.pexels.com/video-files/9969026/9969026-hd_1080_1920_25fps.mp4", channelId: "virality_testing", eventStarted: false },
    { id: 3, name: "Tech Talk Live: Gadgets Unleashed with Techie Tara", description: "Join tech enthusiast Tara Chen for an exciting live stream event as she introduces her latest gadget line, SmartLife Essentials. This interactive session will dive deep into the features and benefits of each product, including smart home devices and innovative tech accessories. Tara will conduct live demonstrations, showing how these gadgets can simplify daily life. Viewers can participate in polls, ask questions, and share their tech experiences, making this a truly engaging event. Don’t miss out on exclusive bundle deals available only during the live event!", videoUrl: "https://videos.pexels.com/video-files/9632694/9632694-uhd_1440_2732_24fps.mp4", channelId: "virality_testing", eventStarted: true },
    { id: 4, name: "Culinary Journey: Cook with Chef Mia", description: "Step into the kitchen with celebrated chef Mia Rivera during her live cooking event, where she launches her new line of gourmet kitchen tools, Chef’s Essentials. As Mia prepares a delicious, exclusive recipe using her tools, viewers will get insider tips on culinary techniques and the importance of quality kitchenware. Participants can interact with Mia in real-time, asking questions about the cooking process and her product line. The event will also feature exclusive discounts for attendees and a chance to win a complete set of the new kitchen tools!", videoUrl: "https://videos.pexels.com/video-files/9632694/9632694-uhd_1440_2732_24fps.mp4", channelId: "virality_testing", eventStarted: false },
    // Add more events here...
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
        <EventHeader />
        <div className="app-content">
            <LeftPanel events={filteredEvents} onSearch={handleSearch} onSelectEvent={setSelectedEvent} />
            <EventDetails selectedEvent={selectedEvent} />
            <VideoPanel videoUrl={selectedEvent?.videoUrl || ""} />
      </div>
    </div>
  );
}

export default PlatformEvent;
