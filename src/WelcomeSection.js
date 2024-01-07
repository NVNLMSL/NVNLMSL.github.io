// WelcomeSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePicture from './assets/profile.jpg';

const WelcomeSection = () => {
  return (
    <div className="section welcome-section">
      <h1>Welcome</h1>
      <span role="img" aria-label="joining-hands" className="emoji">
        🤝
      </span>
      <p className="name">Navin Lamsal</p>
      <div className="profile-picture-container">
        <img src={profilePicture} alt="Navin Lamsal" className="profile-picture" />
      </div>
    </div>
  );
};

export default WelcomeSection;
