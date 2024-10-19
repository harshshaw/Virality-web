import React, { useState } from 'react';
import './Css/ChatScreen.css';
import Header from '../LandingPage/Header';

const ChatScreen = () => {
  const [selectedThread, setSelectedThread] = useState('General');
  const [searchTerm, setSearchTerm] = useState('');
  const [chatInput, setChatInput] = useState('');

  const threads = ['General', 'ReactJS', 'JavaScript', 'Sports', 'Music'];
  const users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  const chatMessages = {
    General: [
      { user: 'Alice', message: 'Hey everyone!' },
      { user: 'Bob', message: 'Hi Alice!' },
    ],
    ReactJS: [
      { user: 'Charlie', message: 'Anyone working on React projects?' },
      { user: 'David', message: 'Yes, I am!' },
      
    ],
    ReactJS: [
        { user: 'Charlie', message: 'Anyone working on React projects?' },
        { user: 'David', message: 'Yes, I am!' },
        
      ],
      ReactJS: [
        { user: 'Charlie', message: 'Anyone working on React projects?' },
        { user: 'David', message: 'Yes, I am!' },
        
      ],
    // Add more messages for other threads as needed
  };

  const handleThreadClick = (thread) => {
    setSelectedThread(thread);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChatInputChange = (e) => {
    setChatInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      chatMessages[selectedThread].push({ user: 'You', message: chatInput });
      setChatInput('');
    }
  };

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Header></Header>
    <div className="chat-screen-container">
      <div className="sidebar">
        <h3>Threads</h3>
        <ul>
          {threads.map((thread) => (
            <li
              key={thread}
              className={thread === selectedThread ? 'active-thread' : ''}
              onClick={() => handleThreadClick(thread)}
            >
              {thread}
            </li>
          ))}
        </ul>

        <h3>Search Users</h3>
        <input
          type="text"
          placeholder="Search for a user..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <ul>
          {filteredUsers.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>

      <div className="chat-area">
        <div className="chat-header">
          <h2>{selectedThread} Thread</h2>
        </div>

        <div className="chat-messages">
          {chatMessages[selectedThread].map((msg, index) => (
            <div key={index} className="chat-message">
              <strong>{msg.user}:</strong> {msg.message}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={chatInput}
            onChange={handleChatInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
    </>

  );
};

export default ChatScreen;
