import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="order-2 md:order-1"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          I am a passionate Computer Science student at PES MCOE, driven by a deep curiosity for technology and innovation. My journey in software development has been marked by a strong foundation in both theoretical concepts and practical applications.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          With expertise in full-stack development, I specialize in building scalable web applications using modern technologies like React, TypeScript, and Node.js. I'm particularly interested in AI/ML and its applications in solving real-world problems.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Beyond coding, I'm an avid problem solver who enjoys tackling complex challenges and contributing to open-source projects. I believe in continuous learning and staying updated with the latest technological advancements.
        </p> 
        
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
            Problem Solving
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
            Full Stack Development
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
            AI/ML
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
            Open Source
          </span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="order-1 md:order-2"
      >
        <div className="relative">
          <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transform hover:scale-105 transition-transform duration-300">
            {/* Add your profile image here */}
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-300 font-bold">CS</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
