import React, { Suspense, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import LoadingSpinner from './components/layout/LoadingSpinner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { trackWebVitals } from './utils/performance';
import { runPerformanceAudit } from './utils/performanceAudit';
import { Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  useEffect(() => {
    // Track web vitals
    trackWebVitals((metric) => {
      // Send to analytics
      console.log(metric);
      // Run performance audit
      runPerformanceAudit({ lcp: metric.value, fid: undefined, cls: undefined });
    });
  }, []);

  const InteractiveBackground = React.lazy(() => 
    import('./components/3d/InteractiveBackground').then(module => ({ default: module.InteractiveBackground }))
  );

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AccessibilityProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Suspense fallback={<LoadingSpinner />}>
              <InteractiveBackground />
              <Navbar />
              <main className="container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </Suspense>
          </div>
        </AccessibilityProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
