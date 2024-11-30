import { useState, useEffect, useCallback } from 'react';
import { runAccessibilityAudit, AccessibilityIssue } from '../utils/accessibilityAudit';
import { collectWebVitals, WebVitals } from '../utils/performance';
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
      const [accessibilityAudit, webVitals] = await Promise.all([
        runAccessibilityAudit(),
        collectWebVitals()
      ]);

      const performanceAudit = await runPerformanceAudit(webVitals);

      setAuditResults({
        accessibility: {
          score: accessibilityAudit.score,
          issues: accessibilityAudit.issues
        },
        performance: {
          score: performanceAudit.score,
          metrics: webVitals,
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

  return {
    auditResults,
    isAuditing,
    runAudit: runComprehensiveAudit
  };
};
