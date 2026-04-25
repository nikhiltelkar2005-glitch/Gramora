import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, HeartFilledIcon, CommentIcon, ShareIcon, SaveIcon, SaveFilledIcon, MoreIcon } from '../Icons';
import './Post5.css';

function Post5() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(1203);

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
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" className="post-avatar" alt="user" />
          <div className="post-text-info">
            <Link to={`/profile/priya_pillai`} style={{ textDecoration: 'none', color: 'inherit' }}><span className="post-username">priya_pillai</span></Link>
            <span className="post-location">Modernist Villa</span>
          </div>
        </div>
        <MoreIcon />
      </div>
      <div className="post-media" onDoubleClick={() => !liked && handleLike()}>
        <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1000" alt="post" />
      </div>
      <div className="post-actions">
        <div className="actions-left">
          <button className="action-btn" onClick={handleLike}>{liked ? <HeartFilledIcon /> : <HeartIcon />}</button>
          <button className="action-btn"><CommentIcon /></button>
          <button className="action-btn"><ShareIcon /></button>
        </div>
        <button className="action-btn" onClick={() => setSaved(!saved)}>
          {saved ? <SaveFilledIcon /> : <SaveIcon />}
        </button>
      </div>
      <div className="post-likes">{likes.toLocaleString()} likes</div>
      <div className="post-caption">
        <Link to={`/profile/priya_pillai`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}><span className="caption-username">priya_pillai</span></Link>Minimalist design.
      </div>
    </div>
  );
}
export default Post5;
