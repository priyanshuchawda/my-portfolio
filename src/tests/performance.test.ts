import { describe, it, expect } from 'vitest';
import { WebVitals } from '../utils/performance';
import { runPerformanceAudit } from '../utils/performanceAudit';

describe('Performance Audit', () => {
  it('should calculate perfect score for good metrics', () => {
    const metrics: WebVitals = {
      lcp: 2000,
      fid: 50,
      cls: 0.05,
    };

    const result = runPerformanceAudit(metrics);
    expect(result.score).toBe(100);
    expect(result.recommendations).toHaveLength(0);
  });

  it('should calculate poor score for bad metrics', () => {
    const metrics: WebVitals = {
      lcp: 5000,
      fid: 400,
      cls: 0.3,
    };

    const result = runPerformanceAudit(metrics);
    expect(result.score).toBe(0);
    expect(result.recommendations).toHaveLength(3);
  });

  it('should handle undefined metrics', () => {
    const metrics: WebVitals = {
      lcp: undefined,
      fid: undefined,
      cls: undefined,
    };

    const result = runPerformanceAudit(metrics);
    expect(result.score).toBe(0);
    expect(result.recommendations).toHaveLength(0);
  });

  it('should handle partial metrics', () => {
    const metrics: WebVitals = {
      lcp: 2000,
      fid: undefined,
      cls: 0.05,
    };

    const result = runPerformanceAudit(metrics);
    expect(result.score).toBeGreaterThan(0);
    expect(result.score).toBeLessThanOrEqual(100);
  });
});
