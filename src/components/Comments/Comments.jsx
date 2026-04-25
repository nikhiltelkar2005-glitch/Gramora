import React, { useState } from 'react';
import './Comments.css';

function Comments({ initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    setComments([...comments, { id: Date.now(), text: newComment, user: 'nikhil_telkar' }]);
    setNewComment('');
  };

  const handleRemoveComment = (id) => {
    setComments(comments.filter(c => c.id !== id));
  };

  return (
    <div className="comments-section">
      {comments.length > 0 && (
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <div>
                <span className="comment-user">{comment.user}</span>
                <span className="comment-text">{comment.text}</span>
              </div>
              <button 
                className="remove-comment-btn" 
                onClick={() => handleRemoveComment(comment.id)}
                title="Delete comment"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
      <form className="add-comment-form" onSubmit={handleAddComment}>
        <input 
          type="text" 
          placeholder="Add a comment..." 
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="comment-input"
        />
        <button type="submit" className="post-comment-btn" disabled={!newComment.trim()}>
          Post
        </button>
      </form>
    </div>
  );
}

export default Comments;
