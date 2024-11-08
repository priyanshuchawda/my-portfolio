import React from 'react';
import '../styles/SocialMediaConnections.css';

function SocialMediaConnections() {
  return (
    <div className="social-media-connections">
      <h2>Social Media Connections</h2>
      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="github-icon.png" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="linkedin-icon.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default SocialMediaConnections;