import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/layout/LoadingSpinner';
import { Navigation } from './components/layout/Navigation';
import { Suspense } from 'react';

// Import all section components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Blog from './components/sections/Blog';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import GitHubActivity from './components/sections/GitHubActivity';
import Newsletter from './components/sections/Newsletter';
import Timeline from './components/sections/Timeline';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AccessibilityProvider>
          <Router basename="/portfolio">
            <div className="min-h-screen bg-white dark:bg-gray-900">
              <Navigation />
              <main>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={
                      <>
                        <Hero />
                        <About />
                        <Experience />
                        <Skills />
                        <Projects />
                        <GitHubActivity />
                        <Certifications />
                        <Blog />
                        <Timeline />
                        <Newsletter />
                        <Contact />
                      </>
                    } />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/github" element={<GitHubActivity />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Hero />} />
                  </Routes>
                </Suspense>
              </main>
            </div>
          </Router>
        </AccessibilityProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
