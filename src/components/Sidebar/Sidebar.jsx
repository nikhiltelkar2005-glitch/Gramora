import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  Search, 
  Compass, 
  Film, 
  MessageCircle, 
  Heart, 
  SquarePlus, 
  Menu,
  LayoutGrid
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ onOpenMessages, onOpenCreate }) => {
  const [activeItem, setActiveItem] = useState('Home');
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', icon: <Home className="nav-icon" />, path: '/' },
    { name: 'Reels', icon: <Film className="nav-icon" />, path: '/reels' },
    { name: 'Messages', icon: <MessageCircle className="nav-icon" />, path: null },
    { name: 'Search', icon: <Search className="nav-icon" />, path: null },
    { name: 'Explore', icon: <Compass className="nav-icon" />, path: '/explore' },
    { name: 'Notifications', icon: <Heart className="nav-icon" />, path: null },
    { name: 'Create', icon: <SquarePlus className="nav-icon" />, path: null },
    { name: 'Profile', icon: <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" className="profile-avatar" alt="Profile" />, path: '/profile/nikhil_telkar' },
  ];

  const bottomItems = [
    { name: 'More', icon: <Menu className="nav-icon" /> },
    { name: 'Also from Meta', icon: <LayoutGrid className="nav-icon" /> },
  ];

  const InstagramLogo = () => (
    <svg aria-label="Instagram" color="white" fill="white" height="32" role="img" viewBox="0 0 24 24" width="32">
      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill="currentColor"></path>
    </svg>
  );

  return (
    <aside className="sidebar">
      <div className="sidebar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <InstagramLogo />
        <span className="logo-text">Gramora</span>
      </div>

      <nav className="nav-items">
        {navItems.map((item) => (
          <div 
            key={item.name} 
            className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
            data-name={item.name}
            onClick={() => {
              setActiveItem(item.name);
              if (item.path) {
                navigate(item.path);
              }
              if (item.name === 'Messages' && onOpenMessages) {
                onOpenMessages();
              }
              if (item.name === 'Create' && onOpenCreate) {
                onOpenCreate();
              }
            }}
          >
            <div className="nav-icon-container">
              {item.icon}
            </div>
            <span className="nav-text">{item.name}</span>
          </div>
        ))}
      </nav>

      <div className="bottom-items">
        {bottomItems.map((item) => (
          <div key={item.name} className="nav-item">
            <div className="nav-icon-container">
              {item.icon}
            </div>
            <span className="nav-text">{item.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
