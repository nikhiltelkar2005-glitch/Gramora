import React from 'react';
import { Settings, MoreHorizontal } from 'lucide-react';
import './ProfileHeader.css';

const ProfileHeader = ({ user }) => {
  if (!user) return null;

  return (
    <header className="profile-header">
      <div className="profile-image-container">
        <div className="profile-image-wrapper">
          <img src={user.profilePic || 'https://via.placeholder.com/150'} alt={user.username} className="profile-image" />
        </div>
      </div>

      <section className="profile-details">
        <div className="profile-username-row">
          <h2 className="profile-username">
            {user.username}
            {user.isVerified && <span className="verified-badge">✓</span>}
          </h2>
          <div className="profile-actions">
            <button className="btn-follow">Follow</button>
            <button className="btn-message">Message</button>
          </div>
          <button className="btn-icon">
            <Settings size={20} />
          </button>
          <button className="btn-more-mobile">
            <MoreHorizontal size={24} />
          </button>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-count">{user.postsCount}</span> posts
          </div>
          <div className="stat-item">
            <span className="stat-count">{user.followersCount}</span> followers
          </div>
          <div className="stat-item">
            <span className="stat-count">{user.followingCount}</span> following
          </div>
        </div>

        <div className="profile-bio">
          <h1 className="profile-full-name">{user.name}</h1>
          {user.category && <div className="profile-category">{user.category}</div>}
          <div className="profile-bio-text">
            {user.bio}
          </div>
        </div>

        {user.mutualFollowers && user.mutualFollowers.length > 0 && (
          <div className="profile-mutuals">
            <div className="mutual-avatars">
              {user.mutualFollowers.map((follower, index) => (
                <img key={index} src={follower.profilePic} alt={follower.username} className="mutual-avatar" style={{ zIndex: 3 - index }} />
              ))}
            </div>
            <div className="mutual-text">
              Followed by {user.mutualFollowers[0].username}
              {user.mutualFollowers.length > 1 && `, ${user.mutualFollowers[1].username}`}
              {user.mutualFollowers.length > 2 && ` and others`}
            </div>
          </div>
        )}
      </section>
    </header>
  );
};

export default ProfileHeader;
