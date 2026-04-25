import React from 'react';
import { Story, Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10 } from '../components';

const Home = ({ posts }) => {
  return (
    <main className="main-content">
      <Story />
      <div className="feed-container">
        <Post1 />
        <Post2 />
        <Post3 />
        <Post4 />
        <Post5 />
        <Post6 />
        <Post7 />
        <Post8 />
        <Post9 />
        <Post10 />
      </div>
    </main>
  );
};

export default Home;
