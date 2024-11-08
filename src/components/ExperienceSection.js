import React, { useEffect } from 'react';
import '../styles/ExperienceSection.css';
import ScrollMagic from 'scrollmagic';

function ExperienceSection() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    document.querySelectorAll('.experience-item').forEach((item) => {
      new ScrollMagic.Scene({
        triggerElement: item,
        triggerHook: 0.8,
        reverse: false,
      })
        .setClassToggle(item, 'fade-in')
        .addTo(controller);
    });
  }, []);

  const experiences = [
    {
      company: 'Priyanshu',
      role: 'everything',
      achievements: 'everything',
      technologies: 'everything',
      
    },
    
  
  ];

  return (
    <div className="experience" id="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-item" key={index}>
          
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
