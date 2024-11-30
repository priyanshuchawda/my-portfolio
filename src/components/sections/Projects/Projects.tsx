import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Projects
        </h2>

        <ProjectFilter 
          onFilterChange={setSelectedFilter}
          selectedFilter={selectedFilter}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
