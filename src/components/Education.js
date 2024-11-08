import React from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-item">
        <h3>Bachelor of Technology (B.Tech) in Computer Science Engineering</h3>
        <p>
          PES Modern College of Engineering, Pune, India
          <br />
          <a href="https://moderncoe.edu.in/" target="_blank" rel="noopener noreferrer">
            https://moderncoe.edu.in/
          </a>
        </p>
        <p>Expected Graduation: May 2028</p>
      </div>
    </div>
  );
}

export default Education;