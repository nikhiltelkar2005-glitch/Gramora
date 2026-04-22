import React from 'react';
import './Header.css';
import { 
  Home, 
  Search, 
  Compass, 
  Film, 
  MessageCircle, 
  Heart, 
  SquarePlus, 
  User, 
  Menu,  
  Camera, 
  AtSign
} from 'lucide-react';

const Header = () => {
  return (
    <nav className="headerSidebar">
      <div className="headerLogo">
        <Camera size={28} />
        <span className="logoText">Gramoga</span>
      </div>
      
      <ul className="headerNavLinks">
        <li className="navItem">
          <Home size={24} />
          <span className="navLabel">Home</span>
        </li>
        <li className="navItem">
          <Search size={24} />
          <span className="navLabel">Search</span>
        </li>
        <li className="navItem">
          <Compass size={24} />
          <span className="navLabel">Explore</span>
        </li>
        <li className="navItem">
          <Film size={24} />
          <span className="navLabel">Reels</span>
        </li>
        <li className="navItem notificationItem">
          <MessageCircle size={24} />
          <span className="navLabel">Messages</span>
        </li>
        <li className="navItem notificationItem">
          <Heart size={24} />
          <span className="navLabel">Notifications</span>
        </li>
        <li className="navItem">
          <SquarePlus size={24} />
          <span className="navLabel">Create</span>
        </li>
        <li className="navItem">
          <User size={24} />
          <span className="navLabel">Profile</span>
        </li>
      </ul>

      <div className="headerBottom">
        <div className="navItem">
          <Menu size={24} />
          <span className="navLabel">More</span>
        </div>
        <div className="navItem">
          <AtSign size={24} />
          <span className="navLabel">Threads</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
