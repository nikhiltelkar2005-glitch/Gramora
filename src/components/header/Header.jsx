import './Header.css';
import { 
  Home, 
  Search, 
  Compass, 
  Clapperboard, 
  MessageCircle, 
  Heart, 
  SquarePlus,
  User,
  Menu
} from 'lucide-react';

const Header = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        {/* Logo Section */}
        <div className="sidebar-logo">
          <h1>Gramora</h1>
        </div>

        {/* Navigation Items */}
        <nav className="sidebar-items">
          <div className="sidebar-item active">
            <Home size={26} />
            <span className="sidebar-label">Home</span>
          </div>
          <div className="sidebar-item">
            <Search size={26} />
            <span className="sidebar-label">Search</span>
          </div>
          <div className="sidebar-item">
            <Compass size={26} />
            <span className="sidebar-label">Explore</span>
          </div>
          <div className="sidebar-item">
            <Clapperboard size={26} />
            <span className="sidebar-label">Reels</span>
          </div>
          <div className="sidebar-item">
            <MessageCircle size={26} />
            <span className="sidebar-label">Messages</span>
          </div>
          <div className="sidebar-item">
            <Heart size={26} />
            <span className="sidebar-label">Notifications</span>
          </div>
          <div className="sidebar-item">
            <SquarePlus size={26} />
            <span className="sidebar-label">Create</span>
          </div>
          <div className="sidebar-item">
            <div className="profile-placeholder">
              <User size={18} />
            </div>
            <span className="sidebar-label">Profile</span>
          </div>
        </nav>

        {/* More Button */}
        <div className="sidebar-more">
          <div className="sidebar-item">
            <Menu size={26} />
            <span className="sidebar-label">More</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Header;


