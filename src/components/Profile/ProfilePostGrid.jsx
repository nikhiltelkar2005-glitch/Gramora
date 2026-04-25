import { Heart, MessageCircle, Play, Layers, Pin } from 'lucide-react';
import './ProfilePostGrid.css';

const ProfilePostGrid = ({ posts }) => {
  if (!posts || posts.length === 0) return (
    <div className="no-posts-container">
      <div className="no-posts-icon">📷</div>
      <h2>No Posts Yet</h2>
    </div>
  );

  return (
    <div className="profile-post-grid">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <img src={post.imageUrl} alt={`Post ${post.id}`} className="post-image" />

          {post.type === 'video' && (
            <div className="post-type-icon">
              <Play size={18} fill="white" />
            </div>
          )}

          {post.type === 'carousel' && (
            <div className="post-type-icon">
              <Layers size={18} fill="white" />
            </div>
          )}

          {post.type === 'pinned' && (
            <div className="post-type-icon">
              <Pin size={18} fill="white" />
            </div>
          )}

          <div className="post-overlay">
            <div className="post-stat">
              <Heart size={20} fill="white" />
              <span>{post.likes}</span>
            </div>
            <div className="post-stat">
              <MessageCircle size={20} fill="white" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePostGrid;
