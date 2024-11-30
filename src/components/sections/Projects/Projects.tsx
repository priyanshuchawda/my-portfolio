import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProjects } from '../../../hooks/useProjects';
import LoadingState from '../../shared/LoadingState';
import ProjectFilter from './ProjectFilter';

const Projects = () => {
  const { projects, loading, error, filterProjects } = useProjects();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  if (loading) return <LoadingState text="Loading projects..." />;
  if (error) return <div className="text-red-500">{error}</div>;

  const filteredProjects = filterProjects(activeFilter);

  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <ProjectFilter onFilterChange={handleFilterChange} activeFilter={activeFilter} projects={projects} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredProjects.map((project) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={`${project.id}-${tech}-${index}`}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
