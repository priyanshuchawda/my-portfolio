import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          I'm a Full Stack Developer passionate about creating beautiful and functional web applications
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
