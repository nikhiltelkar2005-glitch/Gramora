import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Sidebar, RightSidebar, CreatePostModal } from './components';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';

const INITIAL_POSTS = [
  {
    id: 1,
    username: 'aryan_sharma',
    userAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    location: 'Manali, Himachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000',
    likes: 12842,
    caption: 'Finding peace in the heart of the mountains. 🏔️',
    timestamp: '2 HOURS AGO'
  },
  {
    id: 2,
    username: 'sneha_kapoor',
    userAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=200',
    location: 'Marine Drive, Mumbai',
    imageUrl: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000',
    likes: 8211,
    caption: 'Late night vibes in the city of dreams. 🌃',
    timestamp: '5 HOURS AGO'
  },
  {
    id: 3,
    username: 'ishaan_tech',
    userAvatar: 'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=crop&q=80&w=200',
    location: 'Bangalore, India',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000',
    likes: 4520,
    caption: 'Setup upgrade complete! Ready for some intense coding. 💻🚀',
    timestamp: '10 HOURS AGO'
  }
];

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [posts, setPosts] = useState(INITIAL_POSTS);

  const openChatWithUser = (user) => {
    setSelectedUser(user);
    setIsChatOpen(true);
  };

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="app">
      <Sidebar 
        onOpenMessages={() => setIsChatOpen(true)} 
        onOpenCreate={() => setIsCreateModalOpen(true)}
      />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/profile/:username" element={<ProfilePage onMessageClick={openChatWithUser} />} />
      </Routes>
      <RightSidebar 
        isChatOpen={isChatOpen} 
        setIsChatOpen={setIsChatOpen}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      
      {isCreateModalOpen && (
        <CreatePostModal 
          onClose={() => setIsCreateModalOpen(false)} 
          onPostShared={addNewPost}
        />
      )}
    </div>
  );
}

export default App;
