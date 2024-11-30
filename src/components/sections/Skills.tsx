import { motion } from 'framer-motion';
import SkillChart from './Skills/SkillChart';

const programmingSkills = [
  { name: 'C++', level: 95, color: 'bg-blue-500' },
  { name: 'Python', level: 90, color: 'bg-blue-600' },
  { name: 'JavaScript/TypeScript', level: 92, color: 'bg-blue-400' },
  { name: 'Go (Golang)', level: 85, color: 'bg-blue-500' },
  { name: 'SQL', level: 88, color: 'bg-blue-600' },
];

const webDevSkills = [
  { name: 'React/Next.js', level: 95, color: 'bg-green-500' },
  { name: 'Node.js/Express', level: 90, color: 'bg-green-600' },
  { name: 'GraphQL', level: 85, color: 'bg-green-400' },
  { name: 'PostgreSQL/Redis', level: 88, color: 'bg-green-500' },
  { name: 'Docker/Kubernetes', level: 85, color: 'bg-green-600' },
];

const aiMlSkills = [
  { name: 'TensorFlow/PyTorch', level: 88, color: 'bg-purple-500' },
  { name: 'NLP/Deep Learning', level: 85, color: 'bg-purple-600' },
  { name: 'Data Science', level: 90, color: 'bg-purple-400' },
  { name: 'MLOps', level: 82, color: 'bg-purple-500' },
];

const advancedSkills = [
  { name: 'Cloud Computing', level: 88, color: 'bg-indigo-500' },
  { name: 'DevOps/CI/CD', level: 85, color: 'bg-indigo-600' },
  { name: 'System Design', level: 90, color: 'bg-indigo-400' },
  { name: 'Web3/Blockchain', level: 80, color: 'bg-indigo-500' },
  { name: 'AR/VR Development', level: 78, color: 'bg-indigo-600' },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SkillChart skills={programmingSkills} title="Programming Languages" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SkillChart skills={webDevSkills} title="Web Development" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <SkillChart skills={aiMlSkills} title="AI & Machine Learning" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <SkillChart skills={advancedSkills} title="Advanced Technologies" />
      </motion.div>
    </div>
  );
};

export default Skills;
