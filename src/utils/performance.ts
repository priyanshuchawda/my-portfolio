import { ReportHandler, Metric } from 'web-vitals';

export interface WebVitals {
  lcp: number | undefined;
  fid: number | undefined;
  cls: number | undefined;
}

export function trackWebVitals(onReport: ReportHandler) {
  import('web-vitals').then(({ getCLS, getFID, getLCP }) => {
    getCLS(onReport);
    getFID(onReport);
    getLCP(onReport);
  });
}

export function processMetric(metric: Metric): WebVitals {
  const vitals: WebVitals = {
    lcp: undefined,
    fid: undefined,
    cls: undefined,
  };

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

  return vitals;
}

export async function measurePageLoad(): Promise<WebVitals> {
  return new Promise((resolve) => {
    const vitals: WebVitals = {
      lcp: undefined,
      fid: undefined,
      cls: undefined,
    };

    trackWebVitals((metric) => {
      const updatedVitals = processMetric(metric);
      Object.assign(vitals, updatedVitals);

      if (vitals.lcp !== undefined && vitals.fid !== undefined && vitals.cls !== undefined) {
        resolve(vitals);
      }
    });

    // Resolve after 10 seconds even if not all metrics are collected
    setTimeout(() => resolve(vitals), 10000);
  });
}

const reportVital = (metric: Metric) => {
  // Send to analytics
  if (window.gtag) {
    window.gtag('event', 'web_vitals', {
      metric_id: metric.id,
      metric_name: metric.name,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating,
    });
  }
};

export const trackWebVitals = () => {
  if (typeof window !== 'undefined') {
    reportVital({
      id: 'page-load',
      name: 'page-load',
      value: performance.now(),
      delta: 0,
      rating: 'good',
    });
  }
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

    trackWebVitals(reportVital);
  });
};
