import { motion } from 'framer-motion';
import { SkillChart } from './Skills/SkillChart';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Languages' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Python', level: 85, category: 'Languages' },
  { name: 'AWS', level: 75, category: 'DevOps' },
  { name: 'Docker', level: 80, category: 'DevOps' },
  { name: 'GraphQL', level: 75, category: 'Backend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'TailwindCSS', level: 90, category: 'Frontend' },
  { name: 'MongoDB', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', level: 85, category: 'Backend' },
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'Jest', level: 80, category: 'Testing' },
  { name: 'Cypress', level: 75, category: 'Testing' },
  { name: 'Redux', level: 85, category: 'Frontend' },
];

export const Skills = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Skills & Expertise
          </h2>

          <div className="max-w-4xl mx-auto">
            <SkillChart skills={skills} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
