import React from 'react';
import './Header.css';
import { 
  Home, 
  Search, 
  Compass, 
  Film, 
  MessageCircle, 
  Heart, 
  PlusSquare, 
  User, 
  Menu, 
  Instagram,
  AtSign
} from 'lucide-react';

const Header = () => {
  return (
    <nav className="headerSidebar">
      <div className="headerLogo">
        <Instagram size={28} />
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
          <span className="notificationBadge">2</span>
          <span className="navLabel">Notifications</span>
        </li>
        <li className="navItem">
          <PlusSquare size={24} />
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
