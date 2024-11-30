import { motion } from 'framer-motion';

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const timelineData: TimelineItem[] = [
  {
    date: "2023 - Present",
    title: "Full Stack Developer",
    company: "Your Current Company",
    description: "Leading development of web applications using modern technologies. Implementing scalable solutions and mentoring junior developers.",
    technologies: ["React", "Node.js", "TypeScript", "AWS"]
  },
  // Add more timeline items here
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Career Journey
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700" />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between mb-8 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="w-5/12" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full" />
                <div className="w-5/12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                    {item.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
