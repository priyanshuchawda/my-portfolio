import { useEffect, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { ThreeProvider } from './context/ThreeContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import Navbar from './components/layout/Navbar';
import LoadingSpinner from './components/shared/LoadingState';
import ErrorBoundary from './components/ErrorBoundary';
import OfflineNotification from './components/layout/OfflineNotification';
import AccessibilityMenu from './components/layout/AccessibilityMenu';
import { reportWebVitals, measurePageLoad } from './utils/performance';
import { usePerformanceMetrics } from './hooks/usePerformanceMetrics';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';
import { useAudit } from './hooks/useAudit';

// Lazy load components
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects/Projects'));
const Blog = lazy(() => import('./components/sections/Blog'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));
const BackToTop = lazy(() => import('./components/layout/BackToTop'));
const SEO = lazy(() => import('./components/layout/SEO'));
const Newsletter = lazy(() => import('./components/sections/Newsletter'));
const GitHubActivity = lazy(() => import('./components/sections/GitHubActivity'));
const InteractiveBackground = lazy(() => import('./components/3d/InteractiveBackground'));

function App() {
  const { metrics, getPerformanceAdvice } = usePerformanceMetrics();
  const { auditResults, isAuditing, runAudit } = useAudit(process.env.NODE_ENV === 'production');

  useEffect(() => {
    // Register service worker
    serviceWorkerRegistration.register({
      onSuccess: (registration) => {
        console.log('PWA registration successful', registration);
      },
      onUpdate: (registration) => {
        const shouldUpdate = window.confirm('New content is available! Click OK to update.');
        if (shouldUpdate && registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          window.location.reload();
        }
      },
    });

    // Report web vitals
    reportWebVitals(console.log);
    measurePageLoad();

    // Log performance advice in development
    if (process.env.NODE_ENV === 'development') {
      const advice = getPerformanceAdvice();
      if (advice.length > 0) {
        console.group('Performance Optimization Advice');
        advice.forEach(tip => console.warn(tip));
        console.groupEnd();
      }
    }

    // Run audit after a delay to ensure app is mounted
    const timeoutId = setTimeout(() => {
      runAudit();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [getPerformanceAdvice, runAudit]);

  // Optional audit results logging
  useEffect(() => {
    if (auditResults) {
      console.group('🔍 Comprehensive Audit Results');
      console.log('Accessibility Score:', auditResults.accessibility.score);
      console.log('Performance Score:', auditResults.performance.score);
      console.groupEnd();
    }
  }, [auditResults]);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <ThreeProvider>
            <AccessibilityProvider>
              <div className="min-h-screen bg-white dark:bg-gray-900">
                <Navbar />
                <AccessibilityMenu />
                <OfflineNotification />
                
                {isAuditing && (
                  <div className="fixed bottom-4 left-4 z-50 bg-yellow-100 text-yellow-800 p-2 rounded-lg shadow-md text-sm">
                    Running performance audit...
                  </div>
                )}
                
                <Suspense fallback={<LoadingSpinner />}>
                  <SEO />
                  <main>
                    <section id="hero" className="relative">
                      <InteractiveBackground />
                      <Hero />
                    </section>

                    <section id="about" className="py-20">
                      <About />
                    </section>

                    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
                      <Skills />
                    </section>

                    <section id="projects" className="py-20">
                      <Projects />
                    </section>

                    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
                      <Blog />
                    </section>

                    <section id="github" className="py-20">
                      <GitHubActivity />
                    </section>

                    <section id="newsletter" className="py-20 bg-gray-50 dark:bg-gray-800">
                      <Newsletter />
                    </section>

                    <section id="contact" className="py-20">
                      <Contact />
                    </section>
                  </main>

                  <Footer />
                  <BackToTop />
                </Suspense>
              </div>
            </AccessibilityProvider>
          </ThreeProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
