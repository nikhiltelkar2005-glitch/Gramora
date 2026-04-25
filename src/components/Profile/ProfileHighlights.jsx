import React from 'react';
import './ProfileHighlights.css';

const ProfileHighlights = ({ highlights }) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="profile-highlights">
      <div className="highlights-container">
        {highlights.map((highlight) => (
          <div key={highlight.id} className="highlight-item">
            <div className="highlight-image-wrapper">
              <img src={highlight.cover} alt={highlight.title} className="highlight-image" />
            </div>
            <span className="highlight-title">{highlight.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileHighlights;
