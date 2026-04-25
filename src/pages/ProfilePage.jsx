import React from 'react';
import { useParams } from 'react-router-dom';
import { mockUsers } from '../data/mockUsers';
import { ProfileHeader, ProfileHighlights, ProfileTabs, ProfilePostGrid } from '../components/Profile';

const ProfilePage = ({ onMessageClick }) => {
  const { username } = useParams();
  
  const user = mockUsers.find(u => u.username === username);

  if (!user) {
    return (
      <main className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>User not found</h2>
      </main>
    );
  }

  return (
    <main className="main-content" style={{ padding: '0', backgroundColor: '#000' }}>
      <div style={{ maxWidth: '935px', width: '100%', margin: '0 auto' }}>
        <ProfileHeader user={user} onMessageClick={onMessageClick} />
        <ProfileHighlights highlights={user.highlights} />
        <ProfileTabs />
        <ProfilePostGrid posts={user.posts} />
      </div>
    </main>
  );
};

export default ProfilePage;
