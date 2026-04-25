import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Send, Search } from 'lucide-react';
import './RightSidebar.css';

const RightSidebar = ({ isChatOpen, setIsChatOpen, selectedUser, setSelectedUser }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState({});

  const suggestions = [
    {
      username: 'aditya_vlogs',
      fullname: 'Suggested for you',
      profilePic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    },
    {
      username: 'ananya_art',
      fullname: 'Followed by ishaan_tech',
      profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    },
    {
      username: 'ishaan_tech',
      fullname: 'Suggested for you',
      profilePic: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200',
    },
    {
      username: 'riya_travels',
      fullname: 'Followed by aryan_sharma',
      profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
    {
      username: 'rohan_fitness',
      fullname: 'Followed by nikhil_telkar',
      profilePic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    },
  ];

  const footerLinks = [
    'About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language', 'Meta Verified'
  ];

  function handleSendMessage() {
    if (!message.trim() || !selectedUser) return;
    
    setChatHistory(prev => ({
      ...prev,
      [selectedUser.username]: [...(prev[selectedUser.username] || []), message]
    }));
    setMessage('');
  }

  return (
    <aside className="right-sidebar">
      <div className="user-section">
        <div className="user-info">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" className="user-avatar" alt="user" />
          <div className="user-details">
            <Link to="/profile/nikhil_telkar" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="username">nikhil_telkar</span>
            </Link>
            <span className="fullname">Nikhil.Telkar.03</span>
          </div>
        </div>
        <button className="action-btn">Switch</button>
      </div>

      <div className="suggestions-header">
        <span className="suggestions-title">Suggested for you</span>
        <span className="see-all">See all</span>
      </div>

      <div className="suggestions-section">
        {suggestions.map((user, index) => (
          <div key={index} className="suggestion-item">
            <div className="suggestion-info">
              <img src={user.profilePic} className="suggestion-avatar" alt={user.username} />
              <div className="suggestion-details">
                <Link to={`/profile/${user.username}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span className="suggestion-username">{user.username}</span>
                </Link>
                <span className="suggestion-meta">{user.fullname}</span>
              </div>
            </div>
            <button className="action-btn follow-btn">Follow</button>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="footer-links">
          {footerLinks.map((link, index) => (
            <span key={index} className="footer-link">{link}</span>
          ))}
        </div>
        <div className="copyright">
          © 2026 GRAMORA FROM META
        </div>
      </div>

      <div className={`chat-overlay ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="header-left">
            {selectedUser && (
              <button className="back-btn" onClick={() => setSelectedUser(null)}>
                ←
              </button>
            )}
            <span className="header-title">{selectedUser ? selectedUser.username : 'Messages'}</span>
          </div>
          <div className="header-right">
            <X size={20} className="close-btn" onClick={() => setIsChatOpen(false)} />
          </div>
        </div>

        <div className="chat-content">
          {!selectedUser ? (
            <div className="user-list">
              <div className="chat-search">
                <Search size={16} />
                <input type="text" placeholder="Search" />
              </div>
              {suggestions.map((user, index) => (
                <div 
                  key={index} 
                  className="chat-user-item"
                  onClick={() => setSelectedUser(user)}
                >
                  <img src={user.profilePic} alt={user.username} className="chat-user-avatar" />
                  <div className="chat-user-info">
                    <span className="chat-username">{user.username}</span>
                    <span className="chat-last-message">Active now</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="chat-window">
              <div className="messages-area">
                <div className="message-received">
                  <span className="message-text">Hey there! How's it going?</span>
                </div>
                {chatHistory[selectedUser.username]?.map((msg, i) => (
                  <div key={i} className="message-sent">
                    <span className="message-text">{msg}</span>
                  </div>
                ))}
              </div>
              <div className="message-input-container">
                <input 
                  type="text" 
                  placeholder="Message..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage} className="send-btn">
                  <Send size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="message-floating-bar" onClick={() => setIsChatOpen(!isChatOpen)}>
        <div className="message-bar-left">
          <div className="message-bar-icon-container">
            <MessageCircle size={20} className="message-bar-icon" />
          </div>
          <span className="message-bar-text">Messages</span>
        </div>
        <div className="message-bar-right">
          <div className="message-bar-avatar blank-avatar"></div>
          <div className="message-bar-avatar blank-avatar"></div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
