import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  twitterUrl?: string;
}
 
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React, TypeScript, and Three.js',
    technologies: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS'],
    imageUrl: '/projects/portfolio.jpg',
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://portfolio.yourdomain.com',
    twitterUrl: 'https://twitter.com/priyanshu_tech4'
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: '/projects/ecommerce.jpg',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce.yourdomain.com',
    twitterUrl: 'https://twitter.com/priyanshu_tech4'
  },
  {
    id: '3',
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using state-of-the-art models',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    imageUrl: '/projects/ai-generator.jpg',
    githubUrl: 'https://github.com/yourusername/ai-generator',
    twitterUrl: 'https://twitter.com/priyanshu_tech4'
  }
];

export function useProjects() {
  const [projects] = useState<Project[]>(PROJECTS);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  const filterProjects = (technology: string | null = null) => {
    if (!technology) return projects;
    return projects.filter(project => 
      project.technologies.includes(technology)
    );
  };

  return { projects, loading, error, filterProjects };
}
