import React from 'react';
import './Story.css';

const stories = [
  { id: 1, name: 'alex_rivers', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200' },
  { id: 2, name: 'hana_tokyo', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
  { id: 3, name: 'creative_maya', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200' },
  { id: 4, name: 'mountain.ben', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200' },
  { id: 5, name: 'arch_studio', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200' },
  { id: 6, name: 'traveler_sam', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
  { id: 7, name: 'urban_hype', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200' },
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
