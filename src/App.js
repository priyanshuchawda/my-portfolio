import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ResumeSection from './components/ResumeSection';
import CompetitiveProgrammingJourney from './components/CompetitiveProgrammingJourney';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import ScrollMagic from 'scrollmagic';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: '.experience',
      triggerHook: 0.8,
      reverse: false,
    })
      .setClassToggle('.experience', 'fade-in')
      .addTo(controller);
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <AboutSection /> 
      <div id="projects-section"> 
        <ProjectsSection />
      </div>
      <div id="experience-section"> 
        <ExperienceSection />
      </div>
      <div id="skills-section"> 
        <Skills />
      </div>
      <CompetitiveProgrammingJourney />
      <Achievements />
      <Education />
      <ResumeSection />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;