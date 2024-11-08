import React from 'react';
import '../styles/ResumeSection.css';

function ResumeSection() {
  return (
    <div className="resume">
      <h2>Download My Resume</h2>
      <a href="/resume.pdf" className="resume-button" download>
        Download Resume
      </a>
    </div>
  );
}

export default ResumeSection;