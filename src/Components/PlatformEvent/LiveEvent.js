import {useState, useEffect} from 'react';
import AgoraUIKit, { EndCall } from 'agora-react-uikit';

const LiveEvent = () => {

    const  [videoCall, setVideoCall] = useState(true);

    const [key, setKey] = useState('');

    // useEffect(() => {
    //     // Fetch the content of the text file
    //     fetch('D:/Credentials/agora_app_id')
    //         .then((response) => response.text())
    //         .then((data) => {
    //             setKey(data.trim());
    //             console.log(key);  // Set the key to state
    //         })
    //         .catch((error) => console.error('Error fetching the key:', error));
    // }, []);

    const rtcProps = {
        appId: "",
        channel: "virality_testing",
        token: "007eJxTYLDjCJJdeC5xlVTvjTcvE1eJLYjp0pJy7n3oeOQE/8NKeT8FBiNzc0Mjo1TT1BRDIxNzS4skA0MLC2MjY1MDI0Mj05RknSXC6Q2BjAxT+eYwMEIhiC/AUJZZlJiTWVIZX5JaXJKZl87AAAAxliGt"
    };

    const callbacks = {
        EndCall: () => setVideoCall(false),
    };

    return (
        videoCall ? (
            <div style={{display: "flex", width: "100vw", height: "100vh"}}>
                <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks}/>
            </div>
        ) : (
            <h3 onClick={() => setVideoCall(true)}>Join</h3>
        )
    );
};

export default LiveEvent;