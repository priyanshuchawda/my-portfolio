import { ReportHandler } from 'web-vitals';

export interface WebVitals {
  lcp: number;  // Largest Contentful Paint
  fid: number;  // First Input Delay
  cls: number;  // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fcp: number;  // First Contentful Paint
  inp: number;  // Interaction to Next Paint
}

export interface Metric {
  id: string;
  name: string;
  value: number;
  delta: number;
  entries: PerformanceEntry[];
  navigationType: string;
}

export const trackWebVitals = (metrics: Partial<WebVitals>): WebVitals => {
  const defaultMetrics: WebVitals = {
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
    inp: 0
  };

  // Ensure all metrics are non-negative
  const validatedMetrics = Object.entries(metrics).reduce((acc, [key, value]) => {
    acc[key as keyof WebVitals] = Math.max(0, value || 0);
    return acc;
  }, {} as WebVitals);

  return { ...defaultMetrics, ...validatedMetrics };
};

export const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getLCP(onPerfEntry);
      getFCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
