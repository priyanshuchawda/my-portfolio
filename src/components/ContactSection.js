import React from 'react';
import '../styles/ContactSection.css';

function ContactSection() {
  return (
    <div className="contact" id="contact-section">
      <h2>Contact Me</h2>
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

export default ContactSection;