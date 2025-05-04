
import './leftBar.css';
import React, { useState, useEffect } from 'react';

export default function LeftBar({ onSectionChange }) {
  const [selectedSection, setSelectedSection] = useState(null);

  const resetApp = () => {
    setSelectedSection(null);
    onSectionChange('');
  };


  return (
    <div className="left-bar">
      <p className="welcome-info" onClick={resetApp}>
        $ Hello! I'm <span className="firstNameColor welcome-info">Artur Grodel</span>, a passionate <span className="specializationColor welcome-info">Software Engineer</span> from Poland<span className="cursor"></span>
      </p>

      <div className="projects-bar" onClick={() => onSectionChange('Projects')}>
        <h2 style={{ color: '#f38ba8', cursor: 'pointer' }}>Projects</h2>
      </div>

      <div className="experience-bar" onClick={() => onSectionChange('Experience')}>
        <h2 style={{ color: '#8be9fd', cursor: 'pointer' }}>Experience</h2>
      </div>

      <div className="education-bar" onClick={() => onSectionChange('Education')}>
        <h2 style={{ color: '#bd93f9', cursor: 'pointer' }}>Education</h2>
      </div>
    </div>
  );
}

