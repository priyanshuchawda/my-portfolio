import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  onFilterChange: (filter: string | null) => void;
  activeFilter: string | null;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
  }>;
}

const ProjectFilter = ({ onFilterChange, activeFilter, projects }: ProjectFilterProps) => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Get unique technologies from all projects
  const technologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  const handleTechClick = (tech: string | null) => {
    const newTech = tech === selectedTech ? null : tech;
    setSelectedTech(newTech);
    onFilterChange(newTech);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Filter by Technology</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleTechClick(null)}
          className={`px-4 py-2 rounded-full transition-colors ${
            !selectedTech
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          All
        </button>
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => handleTechClick(tech)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedTech === tech
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
