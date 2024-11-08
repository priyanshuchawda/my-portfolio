import React from 'react';
import '../styles/Header.css';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header({ darkMode, toggleDarkMode }) {
  // Scroll functions for each section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="logo">My Portfolio</div>
      <nav className="header-nav">
        <ul>
          <li>
            <button className="nav-button" onClick={() => scrollToSection('skills-section')}>
              Skills
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => scrollToSection('experience-section')}>
              Experience
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => scrollToSection('projects-section')}>
              Projects
            </button>
          </li>
          <li>
            <button className="nav-button toggle-dark-mode" onClick={toggleDarkMode}>
              {darkMode ? <FaSun className="mode-icon" /> : <FaMoon className="mode-icon" />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
