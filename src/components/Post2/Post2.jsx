import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, HeartFilledIcon, CommentIcon, ShareIcon, SaveIcon, SaveFilledIcon, MoreIcon } from '../Icons';
import './Post2.css';

function Post2() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(5310);

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
          <img src="https://i.pravatar.cc/150?u=kavya_creatives" className="post-avatar" alt="user" />
          <div className="post-text-info">
            <Link to={`/profile/kavya_creatives`} style={{ textDecoration: 'none', color: 'inherit' }}><span className="post-username">kavya_creatives</span></Link>
            <span className="post-location">Berlin</span>
          </div>
        </div>
        <MoreIcon />
      </div>
      <div className="post-media" onDoubleClick={() => !liked && handleLike()}>
        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000" alt="post" />
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
        <Link to={`/profile/kavya_creatives`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}><span className="caption-username">kavya_creatives</span></Link>Workspace reveal! ✨
      </div>
    </div>
  );
}
export default Post2;
