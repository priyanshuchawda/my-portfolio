import { WebVitals } from './performance';

interface PerformanceScore {
  score: number;
  recommendations: string[];
}

function getMetricScore(value: number | undefined, good: number, poor: number): number {
  if (value === undefined) return 0;
  if (value <= good) return 1;
  if (value >= poor) return 0;
  return (poor - value) / (poor - good);
}

export function runPerformanceAudit(metrics: WebVitals): PerformanceScore {
  const recommendations: string[] = [];
  let totalScore = 0;
  let validMetrics = 0;

  // LCP (Largest Contentful Paint)
  if (metrics.lcp !== undefined) {
    const lcpScore = getMetricScore(metrics.lcp, 2500, 4000);
    totalScore += lcpScore;
    validMetrics++;

    if (lcpScore < 0.5) {
      recommendations.push(
        'Improve Largest Contentful Paint (LCP) by optimizing images, reducing server response time, or implementing lazy loading.'
      );
    }
  }

  // FID (First Input Delay)
  if (metrics.fid !== undefined) {
    const fidScore = getMetricScore(metrics.fid, 100, 300);
    totalScore += fidScore;
    validMetrics++;

    if (fidScore < 0.5) {
      recommendations.push(
        'Improve First Input Delay (FID) by reducing JavaScript execution time, breaking up long tasks, or optimizing event handlers.'
      );
    }
  }

  // CLS (Cumulative Layout Shift)
  if (metrics.cls !== undefined) {
    const clsScore = getMetricScore(metrics.cls, 0.1, 0.25);
    totalScore += clsScore;
    validMetrics++;

    if (clsScore < 0.5) {
      recommendations.push(
        'Improve Cumulative Layout Shift (CLS) by setting explicit dimensions for images and embeds, avoiding dynamic content insertion above existing content.'
      );
    }
  }

  // Calculate final score (0-100)
  const finalScore = validMetrics > 0 ? (totalScore / validMetrics) * 100 : 0;

  return {
    score: Math.round(finalScore),
    recommendations,
  };
}
