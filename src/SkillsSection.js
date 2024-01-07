// SkillsSection.js
import React from 'react';
import Skill from './Skill';
import { faHtml5, faPhp, faJs, faPython } from '@fortawesome/free-brands-svg-icons';

const skillsData = [
  { name: 'HTML', icon: faHtml5, description: 'Hypertext Markup Language' },
  { name: 'PHP', icon: faPhp, description: 'Hypertext Preprocessor' },
  { name: 'JavaScript', icon: faJs, description: 'JavaScript Programming Language' },
  { name: 'Python', icon: faPython, description: 'Python Programming Language' },
  // Add other skills
];

const SkillsSection = () => {
  return (
    <div className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
