import React, { useState } from 'react';
import './BusinessCard.css';
import FrontPicture from './Two Fish in a Pond.png'
import LinkedInLogo from './LI-In-Bug.png'

const BusinessCard = ({ about, contact, experience }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`business-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
      <div className="card-inner">
        <div className="front">
          <div className="image-container">
            <img src={FrontPicture} alt="Profile" className="profile-image" />
          </div>
          <div className="front-linked-in-button">
            <a href="https://www.linkedin.com/in/kev-you/" target="_blank" rel="noreferrer">
              <img src={LinkedInLogo} alt="Website" className="button-icon" />
            </a>
          </div>
        </div>
        <div className="back">
          <div className="back-content">
            <div className="column">
              <div className="top-section">
                <p><strong>ABOUT ME:</strong>{about}</p>
              </div>
              <div className="bottom-section">
                <p><strong>{'CONTACT\n'}</strong>{contact}</p>
                <div className="back-linked-in-button">
                  <a href="https://www.linkedin.com/in/kev-you/" target="_blank" rel="noreferrer">
                    <img src={LinkedInLogo} alt="Website" className="button-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <p><strong>EXPERIENCE:</strong>{experience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;