import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import './RightSidebar.css';

const RightSidebar = () => {
  const suggestions = [
    {
      username: 'alex_smith',
      fullname: 'Followed by jessica_lee',
      profilePic: 'https://i.pravatar.cc/150?u=alex',
    },
    {
      username: 'maya_designer',
      fullname: 'Suggested for you',
      profilePic: 'https://i.pravatar.cc/150?u=maya',
    },
    {
      username: 'tech_guy',
      fullname: 'Followed by dev_community',
      profilePic: 'https://i.pravatar.cc/150?u=tech',
    },
    {
      username: 'nature_pics',
      fullname: 'Followed by photography_world',
      profilePic: 'https://i.pravatar.cc/150?u=nature',
    },
    {
      username: 'fitness_pro',
      fullname: 'Followed by healthy_living',
      profilePic: 'https://i.pravatar.cc/150?u=fitness',
    },
  ];

  const footerLinks = [
    'About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language', 'Meta Verified'
  ];

  return (
    <aside className="right-sidebar">
      <div className="user-section">
        <div className="user-info">
          <img src="https://i.pravatar.cc/150?u=nikhil" className="user-avatar" alt="user" />
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

      <div className="message-floating-bar">
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
