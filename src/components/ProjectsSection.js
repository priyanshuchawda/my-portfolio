import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/ProjectsSection.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function ProjectsSection() {
  const projects = [
    {
      title: 'Project 1',
      
      github: 'https://github.com/priyanshuchawda'
    },
    {
      
      github: 'https://github.com/priyanshuchawda'
    },
    // Add more projects as needed
  ];

  const chartRefs = useRef([]);

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {projects.map((project, index) => {
          if (!chartRefs.current[index]) {
            chartRefs.current[index] = React.createRef();
          }

          return (
            <SwiperSlide key={index}>
              <div className="project">
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default ProjectsSection;
