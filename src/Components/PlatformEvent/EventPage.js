import React, { useState } from 'react';
import Header from '../Header/Header';

const EventPage = () => {
    const [isLive, setIsLive] = useState(false);  // Track if the event is live
    const [isJoined, setIsJoined] = useState(false);  // Track if user has joined the event

    // Function to start the live event (for the influencer)
    const startLiveEvent = () => {
        // This is where you'd integrate with your streaming API to start the event
        // Example: initializeStreamSession();
        console.log('Live event started!');
        // setIsLive(true);
    };

    // Function to join the live event (for the community)
    const joinLiveEvent = () => {
        if (isLive) {
            // Connect the user to the ongoing live stream
            // Example: joinStreamSession();
            console.log('Joined the live event!');
            // setIsJoined(true);
        } else {
            alert('The live event has not started yet.');
        }
    };

    return (
        <div style={styles.container}>
            <Header style={{backgroundColor: "black"}} />
            <h2>Live Event Page</h2>
            
            <div style={styles.buttonContainer}>
                {!isLive && (
                    <button style={styles.startButton} onClick={startLiveEvent}>
                        Start Live Event
                    </button>
                )}
                
                {/*isLive && */!isJoined && (
                    <button style={styles.joinButton} onClick={joinLiveEvent}>
                        Join Live Event
                    </button>
                )}
            </div>
            
            {/* <div style={styles.statusContainer}>
                {isLive ? (
                    <p>🔴 The live event is currently ongoing.</p>
                ) : (
                    <p>The live event has not started yet.</p>
                )}
                
                {isJoined && (
                    <p>✅ You are now watching the live event!</p>
                )}
            </div> */}
        </div>
    );
};

// Simple styles for the page layout
const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    },
    buttonContainer: {
        margin: '20px',
    },
    startButton: {
        backgroundColor: '#FF5733',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    joinButton: {
        backgroundColor: '#33C1FF',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    statusContainer: {
        marginTop: '20px',
        fontSize: '18px',
        color: '#555',
    }
};

export default EventPage;
