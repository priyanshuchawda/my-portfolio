import React from 'react';
import '../styles/AboutSection.css';


function AboutSection() {
  return (
    <div className="about">
      <h2 className="section-title">About Me</h2>
      <div className="connect-me">
        <a href="https://linkedin.com/in/priyanshuchawda" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/priyanshuchawda" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
      <p>
        I'm a passionate and driven software engineer with a strong foundation in
        various technologies. I'm always eager to learn new things and contribute
        to innovative projects.
      </p>
      <p>
        My goal is to create impactful solutions that solve real-world problems
        and improve people's lives. I believe in the power of technology to make
        a positive difference in the world.
      </p>
      
    </div>
  );
}

export default AboutSection;