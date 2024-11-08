import React from 'react';
import '../styles/SocialMediaIcons.css';

function SocialMediaIcons() {
  return (
    <div className="social-media-icons">
      <a href="https://github.com/priyanshuchawda" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/priyanshuchawda" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://leetcode.com/priyanshuchawda" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-leetcode"></i>
      </a>
      <a href="https://www.codechef.com/users/priyanshuchawda" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-codechef"></i>
      </a>
      <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-geeksforgeeks"></i>
      </a>
    </div>
  );
}

export default SocialMediaIcons;