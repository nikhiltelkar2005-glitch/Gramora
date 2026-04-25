import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, HeartFilledIcon, CommentIcon, ShareIcon, SaveIcon, SaveFilledIcon, MoreIcon } from '../Icons';
import './PostCard.css';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user-info">
          <img src={post.userAvatar} className="post-avatar" alt="user" />
          <div className="post-text-info">
            <Link to={`/profile/${post.username}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="post-username">{post.username}</span>
            </Link>
            {post.location && <span className="post-location">{post.location}</span>}
          </div>
        </div>
        <MoreIcon />
      </div>
      
      <div className="post-media" onDoubleClick={() => !liked && handleLike()}>
        <img src={post.imageUrl} alt="post" />
      </div>

      <div className="post-actions">
        <div className="actions-left">
          <button className="action-btn" onClick={handleLike}>
            {liked ? <HeartFilledIcon /> : <HeartIcon />}
          </button>
          <button className="action-btn"><CommentIcon /></button>
          <button className="action-btn"><ShareIcon /></button>
        </div>
        <button className="action-btn" onClick={() => setSaved(!saved)}>
          {saved ? <SaveFilledIcon /> : <SaveIcon />}
        </button>
      </div>

      <div className="post-likes">{likes.toLocaleString()} likes</div>
      <div className="post-caption">
        <Link to={`/profile/${post.username}`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
          <span className="caption-username">{post.username}</span>
        </Link>
        {' '}{post.caption}
      </div>
      
      {post.timestamp && <div className="post-time">{post.timestamp}</div>}
    </div>
  );
};

export default PostCard;
