import { motion } from 'framer-motion';

interface ProjectFilterProps {
  onFilterChange: (filter: string) => void;
  selectedFilter: string;
}

export const ProjectFilter = ({ onFilterChange, selectedFilter }: ProjectFilterProps) => {
  const filters = ['all', 'web', 'mobile', 'desktop', 'ai/ml'];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-lg capitalize transition-colors ${
            selectedFilter === filter
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
};
