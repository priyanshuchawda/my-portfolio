import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import About from './components/sections/About';
import { ThemeProvider } from './context/ThemeContext';
import DarkModeToggle from './components/layout/DarkModeToggle';
import './utils/emailjs-init';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
            <Navigation />
            <DarkModeToggle />
          </header>

          <main className="pt-20">
            {/* Hero Section */}
            <section className="min-h-[90vh] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <div className="container mx-auto max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center md:text-left md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  <div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
                      Priyanshu Chawda
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                      Full-Stack Developer & AI/ML Enthusiast
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                      <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-colors duration-200">
                        Get in Touch
                      </a>
                      <a href="https://github.com/priyanshuchawda" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:text-lg transition-colors duration-200">
                        View GitHub
                      </a>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-full h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-80 transform rotate-3 transition-transform duration-300 hover:rotate-0"></div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
              <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  About Me
                </h2>
                <About />
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-800">
              <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Skills
                </h2>
                <Skills />
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
              <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Get in Touch
                </h2>
                <Contact />
              </div>
            </section>
          </main>

          <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Navigation
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        Skills
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Connect
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://github.com/priyanshuchawda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/priyanshuchawda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-gray-600 dark:text-gray-300">
                  &copy; 2024 Priyanshu Chawda. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
