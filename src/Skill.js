// Skill.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = ({ icon, name, description }) => (
  <div className="skill">
    <FontAwesomeIcon icon={icon} className="skill-logo" />
    <p className="skill-name">{name}</p>
    <p className="skill-description">{description}</p>
  </div>
);

export default Skill;
