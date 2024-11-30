import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', color: 'from-blue-400 to-cyan-400' },
      { name: 'TypeScript', color: 'from-blue-600 to-blue-400' },
      { name: 'Next.js', color: 'from-gray-800 to-gray-600' },
      { name: 'Tailwind CSS', color: 'from-cyan-400 to-teal-400' },
      { name: 'HTML/CSS', color: 'from-orange-400 to-pink-400' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
      { name: 'Python', color: 'from-blue-500 to-yellow-500' },
      { name: 'Django', color: 'from-green-600 to-green-400' },
      { name: 'FastAPI', color: 'from-teal-500 to-green-500' },
      { name: 'GraphQL', color: 'from-pink-500 to-purple-500' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', color: 'from-green-500 to-emerald-400' },
      { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-600' },
      { name: 'Redis', color: 'from-red-500 to-red-400' },
      { name: 'Firebase', color: 'from-yellow-500 to-orange-500' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', color: 'from-blue-500 to-blue-400' },
      { name: 'Git', color: 'from-orange-500 to-red-500' },
      { name: 'AWS', color: 'from-yellow-500 to-orange-400' },
      { name: 'Linux', color: 'from-yellow-600 to-yellow-400' },
      { name: 'CI/CD', color: 'from-green-500 to-emerald-400' },
    ],
  },
];

const SkillCard = ({ name, color }: { name: string; color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className={`bg-gradient-to-r ${color} p-4 rounded-lg shadow-lg text-white font-medium text-center`}
  >
    {name}
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A comprehensive list of my technical skills and expertise
          </p>
        </motion.div>

        <div className="space-y-12">
          {skills.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.items.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} color={skill.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
