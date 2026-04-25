import React from 'react';
import './Story.css';

const stories = [
  { id: 1, name: 'aryan_sharma', image: 'https://i.pravatar.cc/150?u=aryan' },
  { id: 2, name: 'sneha_kapoor', image: 'https://i.pravatar.cc/150?u=sneha' },
  { id: 3, name: 'kavya_creatives', image: 'https://i.pravatar.cc/150?u=kavya' },
  { id: 4, name: 'arjun_deshmukh', image: 'https://i.pravatar.cc/150?u=arjun' },
  { id: 5, name: 'priya_pillai', image: 'https://i.pravatar.cc/150?u=priya' },
  { id: 6, name: 'vikram_rathore', image: 'https://i.pravatar.cc/150?u=vikram' },
  { id: 7, name: 'zoya_khan', image: 'https://i.pravatar.cc/150?u=zoya' },
];

function Story() {
  return (
    <div className="stories-section">
      {stories.map(story => (
        <div key={story.id} className="story-item">
          <div className="story-ring">
            <div className="story-image-container">
              <img src={story.image} alt={story.name} />
            </div>
          </div>
          <span className="story-name">{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Story;
