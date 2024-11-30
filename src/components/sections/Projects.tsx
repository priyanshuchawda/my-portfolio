import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management and payment processing.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://ecommerce.priyanshuchawda.com',
    githubUrl: 'https://github.com/priyanshuchawda/ecommerce-platform',
    category: 'Full Stack',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/project2.jpg',
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
    liveUrl: 'https://tasks.priyanshuchawda.com',
    githubUrl: 'https://github.com/priyanshuchawda/task-manager',
    category: 'Web App',
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using state-of-the-art machine learning models.',
    image: '/project3.jpg',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    liveUrl: 'https://ai-image.priyanshuchawda.com',
    githubUrl: 'https://github.com/priyanshuchawda/ai-image-generator',
    category: 'AI/ML',
  },
  // Add more projects here
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
  >
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
          <div className="flex justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
