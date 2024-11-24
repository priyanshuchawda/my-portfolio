import { motion } from 'framer-motion';

const skills = {
  languages: {
    title: 'Languages & Core',
    items: [
      'C++',
      'Python',
      'JavaScript',
      'TypeScript',
      'Go (Golang)',
      'SQL',
      'Dart',
    ],
  },
  frontend: {
    title: 'Frontend & Web',
    items: [
      'React',
      'Next.js',
      'Vue.js',
      'Svelte',
      'GraphQL',
      'Tailwind CSS',
      'HTML/CSS',
    ],
  },
  backend: {
    title: 'Backend & DevOps',
    items: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Docker',
      'AWS',
      'Microservices',
      'Firebase',
    ],
  },
  aiml: {
    title: 'AI/ML & Data Science',
    items: [
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'Pandas',
      'Numpy',
      'Data Visualization',
      'Jupyter',
    ],
  },
};

const SkillCategory = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {Object.values(skills).map((category) => (
        <SkillCategory key={category.title} title={category.title} items={category.items} />
      ))}
    </div>
  );
}
