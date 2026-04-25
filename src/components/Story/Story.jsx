import React from 'react';
import './Story.css';

const stories = [
  { id: 1, name: 'aryan_sharma', image: 'https://i.pravatar.cc/150?u=aryan_sharma' },
  { id: 2, name: 'kavya_creatives', image: 'https://i.pravatar.cc/150?u=kavya_creatives' },
  { id: 3, name: 'sneha_kapoor', image: 'https://i.pravatar.cc/150?u=sneha_kapoor' },
  { id: 4, name: 'arjun_deshmukh', image: 'https://i.pravatar.cc/150?u=arjun_deshmukh' },
  { id: 5, name: 'priya_pillai', image: 'https://i.pravatar.cc/150?u=priya_pillai' },
  { id: 6, name: 'vikram_rathore', image: 'https://i.pravatar.cc/150?u=vikram_rathore' },
  { id: 7, name: 'zoya_fashion', image: 'https://i.pravatar.cc/150?u=zoya_fashion' },
  { id: 8, name: 'nina.sky', image: 'https://i.pravatar.cc/150?u=nina.sky' },
  { id: 9, name: 'foodie_jay', image: 'https://i.pravatar.cc/150?u=foodie_jay' },
  { id: 10, name: 'tech_guru', image: 'https://i.pravatar.cc/150?u=tech_guru' },
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
