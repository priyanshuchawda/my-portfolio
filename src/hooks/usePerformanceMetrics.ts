import { useState, useEffect } from 'react';
import { onCLS, onFID, onLCP, Metric } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  fid: number;
  lcp: number;
}

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: 0,
    fid: 0,
    lcp: 0,
  });
 
  useEffect(() => {
    const logMetric = (metric: Metric) => {
      switch (metric.name) {
        case 'CLS':
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          break;
        case 'FID':
          setMetrics(prev => ({ ...prev, fid: metric.value }));
          break;
        case 'LCP':
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          break;
      }

      // Optional: Send metrics to analytics service
      if (process.env.NODE_ENV === 'production') {
        sendMetricsToAnalytics(metric);
      }
    };

    onCLS(logMetric);
    onFID(logMetric);
    onLCP(logMetric);

    return () => {
      // Cleanup if needed
    };
  }, []);

  const sendMetricsToAnalytics = (metric: Metric) => {
    // Placeholder for analytics integration
    // You can replace this with your preferred analytics service
    console.log(`Performance Metric: ${metric.name}`, metric);
  };

  const getPerformanceAdvice = () => {
    const advice: string[] = [];

    if (metrics.cls > 0.1) {
      advice.push('Cumulative Layout Shift is high. Consider stabilizing page layout.');
    }

    if (metrics.lcp > 2500) {
      advice.push('Largest Contentful Paint is slow. Optimize images and critical rendering path.');
    }

    if (metrics.fid > 100) {
      advice.push('First Input Delay is high. Reduce JavaScript execution time.');
    }

    return advice;
  };

  return {
    metrics,
    getPerformanceAdvice,
  };
};
