import React, { useState } from 'react';
import { Grid, Clapperboard, Contact } from 'lucide-react';
import './ProfileTabs.css';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const tabs = [
    { id: 'posts', label: 'POSTS', icon: <Grid size={12} /> },
    { id: 'reels', label: 'REELS', icon: <Clapperboard size={12} /> },
    { id: 'tagged', label: 'TAGGED', icon: <Contact size={12} /> },
  ];

  return (
    <div className="profile-tabs-container">
      <div className="profile-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTabs;
