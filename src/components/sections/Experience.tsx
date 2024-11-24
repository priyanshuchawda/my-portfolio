import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2022 - Present',
    description: 'Led development of multiple high-impact projects and mentored junior developers.',
    achievements: [
      'Architected and implemented microservices architecture',
      'Reduced system latency by 40%',
      'Led team of 5 developers',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
  },
  {
    title: 'Software Engineer',
    company: 'Innovation Labs',
    period: '2020 - 2022',
    description: 'Developed and maintained full-stack applications for enterprise clients.',
    achievements: [
      'Implemented CI/CD pipeline',
      'Developed RESTful APIs',
      'Improved test coverage to 90%',
    ],
    technologies: ['React', 'Python', 'Docker', 'PostgreSQL'],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Inc',
    period: '2018 - 2020',
    description: 'Worked on front-end development and UI/UX improvements.',
    achievements: [
      'Built responsive web applications',
      'Implemented new feature modules',
      'Collaborated with design team',
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'Vue.js', 'Git'],
  },
];

const TimelineItem = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-blue-200 dark:bg-blue-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {experience.company}
            </p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
            {experience.period}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {experience.description}
        </p>

        <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="mb-1">
              {achievement}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <div className="relative">
      {experiences.map((experience, index) => (
        <TimelineItem key={experience.company} experience={experience} index={index} />
      ))}
    </div>
  );
}
