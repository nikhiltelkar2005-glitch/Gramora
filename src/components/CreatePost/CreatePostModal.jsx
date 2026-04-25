import React, { useState, useRef } from 'react';
import { X, Image, MapPin, ChevronDown, Smile } from 'lucide-react';
import './CreatePostModal.css';

const CreatePostModal = ({ onClose, onPostShared }) => {
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setStep(2);
    }
  };

  const handlePost = () => {
    const newPost = {
      id: Date.now(),
      username: 'nikhil_telkar',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      location: location,
      imageUrl: previewUrl,
      likes: 0,
      caption: caption,
      timestamp: 'JUST NOW'
    };

    onPostShared(newPost);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {step === 2 && (
            <button className="back-btn" onClick={() => setStep(1)}>
              ←
            </button>
          )}
          <h3 className="modal-title">
            {step === 1 ? 'Create new post' : 'Create new post'}
          </h3>
          <div className="header-actions">
            {step === 2 ? (
              <button className="share-btn" onClick={handlePost}>Share</button>
            ) : (
              <X className="close-btn" onClick={onClose} />
            )}
          </div>
        </div>

        <div className="modal-content">
          {step === 1 ? (
            <div className="upload-step">
              <div className="upload-icon-container">
                <Image size={48} strokeWidth={1} />
              </div>
              <p className="upload-text">Drag photos and videos here</p>
              <button 
                className="select-btn"
                onClick={() => fileInputRef.current.click()}
              >
                Select from computer
              </button>
              <input 
                type="file" 
                hidden 
                ref={fileInputRef} 
                onChange={handleFileSelect}
                accept="image/*,video/*"
              />
            </div>
          ) : (
            <div className="edit-step">
              <div className="preview-container">
                <img src={previewUrl} alt="Preview" className="post-preview" />
              </div>
              <div className="details-container">
                <div className="user-info-row">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" className="mini-avatar" alt="user" />
                  <span className="mini-username">nikhil_telkar</span>
                </div>
                
                <textarea 
                  className="caption-input"
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  maxLength={2200}
                />
                
                <div className="input-extras">
                  <Smile size={20} className="extra-icon" />
                  <span className="char-count">{caption.length}/2,200</span>
                </div>

                <div className="location-input-row">
                  <input 
                    type="text" 
                    placeholder="Add location" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <MapPin size={20} />
                </div>

                <div className="accordion-item">
                  <span>Accessibility</span>
                  <ChevronDown size={20} />
                </div>
                
                <div className="accordion-item">
                  <span>Advanced settings</span>
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
