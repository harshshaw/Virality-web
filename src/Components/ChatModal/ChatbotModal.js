// src/ChatbotModal.js
import React, { useState } from 'react';
import './ChatbotModal.css';

const ChatbotModal = ({ isOpen, onClose }) => {
    const [textInput, setTextInput] = useState();
    const [messages, setMessages] = useState([{type: 'text', content: 'Hi there! I am Viral AI. I am here to help you select from an awesome catalog of products. Lets get started.'}]);

    const handleTextSubmit = () => {
        if (textInput.trim() !== '') {
            setMessages([...messages, { type: 'text', content: textInput }]);
            setTextInput('');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setMessages([...messages, { type: 'image', content: reader.result }]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleVoiceInput = () => {
        const recognition = new window.SpeechRecognition();
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setMessages([...messages, { type: 'text', content: transcript }]);
        };
        recognition.start();
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <div className="chat-interface">
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.type}>
                                {msg.type === 'text' ? msg.content : <img src={msg.content} alt="User input" />}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <button onClick={handleTextSubmit}>Send</button>
                    <button onClick={handleVoiceInput}>🎤</button>
                </div>
            </div>
        </div>
    );
};

export default ChatbotModal;
