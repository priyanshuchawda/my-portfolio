import { onCLS, onFID, onLCP, Metric } from 'web-vitals';

export interface WebVitals {
  lcp: number;
  fid: number;
  cls: number;
}

export const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
  }
};

export const measurePageLoad = () => {
  if (typeof window === 'undefined') return {};
  
  const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    // Time to first byte
    ttfb: navigationTiming.responseStart - navigationTiming.requestStart,
    // DOM Content Loaded
    dcl: navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart,
    // Load Event
    loadEvent: navigationTiming.loadEventEnd - navigationTiming.loadEventStart,
    // Total Page Load Time
    totalLoadTime: navigationTiming.loadEventEnd - navigationTiming.startTime,
  };
};

export const collectWebVitals = (): Promise<WebVitals> => {
  return new Promise((resolve) => {
    const vitals: Partial<WebVitals> = {};

    const reportVital = (metric: Metric) => {
      switch (metric.name) {
        case 'CLS':
          vitals.cls = metric.value;
          break;
        case 'FID':
          vitals.fid = metric.value;
          break;
        case 'LCP':
          vitals.lcp = metric.value;
          break;
      }

      // Check if all vitals are collected
      if (vitals.cls !== undefined && vitals.fid !== undefined && vitals.lcp !== undefined) {
        resolve(vitals as WebVitals);
      }
    };

    onCLS(reportVital);
    onFID(reportVital);
    onLCP(reportVital);
  });
};
