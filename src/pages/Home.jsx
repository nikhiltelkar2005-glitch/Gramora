import React from 'react';
import { Story, PostCard } from '../components';

const Home = ({ posts }) => {
  return (
    <main className="main-content">
      <Story />
      <div className="feed-container">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
