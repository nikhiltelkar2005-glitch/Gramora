import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, HeartFilledIcon, CommentIcon, ShareIcon, SaveIcon, SaveFilledIcon, MoreIcon } from '../Icons';
import Comments from '../Comments/Comments';
import './Post3.css';

function Post3() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [likes, setLikes] = useState(8211);

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
          <img src="https://i.pravatar.cc/150?u=sneha_kapoor" className="post-avatar" alt="user" />
          <div className="post-text-info">
            <Link to={`/profile/sneha_kapoor`} style={{ textDecoration: 'none', color: 'inherit' }}><span className="post-username">sneha_kapoor</span></Link>
            <span className="post-location">Marine Drive, Mumbai</span>
          </div>
        </div>
        <MoreIcon />
      </div>
      <div className="post-media" onDoubleClick={() => !liked && handleLike()}>
        <img src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000" alt="post" />
      </div>
      <div className="post-actions">
        <div className="actions-left">
          <button className="action-btn" onClick={handleLike}>{liked ? <HeartFilledIcon /> : <HeartIcon />}</button>
          <button className="action-btn" onClick={() => setShowComments(!showComments)}><CommentIcon /></button>
          <button className="action-btn"><ShareIcon /></button>
        </div>
        <button className="action-btn" onClick={() => setSaved(!saved)}>
          {saved ? <SaveFilledIcon /> : <SaveIcon />}
        </button>
      </div>
      <div className="post-likes">{likes.toLocaleString()} likes</div>
      <div className="post-caption">
        <Link to={`/profile/sneha_kapoor`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}><span className="caption-username">sneha_kapoor</span></Link>Late night vibes in the city of dreams. 🌃
      </div>
      {showComments && <Comments initialComments={[{ id: 1, user: 'kavya_creatives', text: 'Love the lighting!' }]} />}
    </div>
  );
}

export default Post3;
