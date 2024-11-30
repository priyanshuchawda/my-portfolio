import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number; // 0 to 100
  color: string;
}

interface SkillChartProps {
  skills: Skill[];
  title: string;
}

const SkillChart = ({ skills, title }: SkillChartProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={controls}
                variants={{
                  visible: {
                    width: `${skill.level}%`,
                    transition: {
                      duration: 1,
                      delay: index * 0.2,
                      ease: 'easeOut',
                    },
                  },
                }}
                className={`h-full rounded-full ${skill.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillChart;
