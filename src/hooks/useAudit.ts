import { useState, useEffect, useCallback } from 'react';
import { runAccessibilityAudit, AccessibilityIssue } from '../utils/accessibilityAudit';
import { trackWebVitals, WebVitals } from '../utils/performance';
import { runPerformanceAudit } from '../utils/performanceAudit';

interface AuditResults {
  accessibility: {
    score: number;
    issues: AccessibilityIssue[];
  };
  performance: {
    score: number;
    metrics: WebVitals;
    recommendations: string[];
  };
}

export const useAudit = (runOnMount = false) => {
  const [auditResults, setAuditResults] = useState<AuditResults | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);

  const runComprehensiveAudit = useCallback(async () => {
    if (isAuditing) return;
    
    setIsAuditing(true);
    try {
      // Add a small delay to ensure DOM is ready
      await new Promise(resolve => setTimeout(resolve, 100));

      // Run parallel audits
      const [accessibilityAudit, metrics] = await Promise.all([
        runAccessibilityAudit(),
        trackWebVitals({})
      ]);

      const performanceAudit = await runPerformanceAudit(metrics);

      setAuditResults({
        accessibility: {
          score: accessibilityAudit.score,
          issues: accessibilityAudit.issues
        },
        performance: {
          score: performanceAudit.score,
          metrics,
          recommendations: performanceAudit.recommendations
        }
      });
    } catch (error) {
      console.error('Audit failed:', error);
    } finally {
      setIsAuditing(false);
    }
  }, [isAuditing]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (runOnMount) {
      // Delay initial audit to ensure app is fully mounted
      timeoutId = setTimeout(() => {
        runComprehensiveAudit();
      }, 1000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [runOnMount, runComprehensiveAudit]);

  useEffect(() => {
    const metrics: Partial<WebVitals> = {};

    // Track initial page load metrics
    trackWebVitals(metrics);

    // Track metrics on route change
    const handleRouteChange = () => {
      trackWebVitals(metrics);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return {
    auditResults,
    isAuditing,
    runAudit: runComprehensiveAudit
  };
};
