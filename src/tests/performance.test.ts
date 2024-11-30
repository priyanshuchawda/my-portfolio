import { describe, it, expect, vi, beforeEach } from 'vitest';
import { collectWebVitals, measurePageLoad, reportWebVitals } from '../utils/performance';
import { runPerformanceAudit } from '../utils/performanceAudit';

describe('Performance Utils', () => {
  beforeEach(() => {
    vi.mock('../utils/performance', () => ({
      collectWebVitals: vi.fn(),
      measurePageLoad: vi.fn(),
      reportWebVitals: vi.fn(),
    }));

    // Mock performance API
    global.performance = {
      mark: vi.fn(),
      measure: vi.fn(),
      getEntriesByName: vi.fn(),
      getEntriesByType: vi.fn(),
      clearMarks: vi.fn(),
      clearMeasures: vi.fn(),
      now: vi.fn(),
    } as any;
  });

  describe('collectWebVitals', () => {
    it('collects web vitals metrics', async () => {
      const mockMetrics = {
        LCP: 2500,
        FID: 100,
        CLS: 0.1,
        FCP: 1000,
        TTFB: 200,
      };

      (collectWebVitals as jest.Mock).mockResolvedValue(mockMetrics);

      const metrics = await collectWebVitals();
      expect(metrics).toEqual(mockMetrics);
    });
  });

  describe('measurePageLoad', () => {
    it('measures page load time', () => {
      const mockTiming = {
        navigationStart: 1000,
        loadEventEnd: 2000,
      };

      (global.performance.getEntriesByType as jest.Mock).mockReturnValue([mockTiming]);

      measurePageLoad();
      expect(global.performance.mark).toHaveBeenCalled();
      expect(global.performance.measure).toHaveBeenCalled();
    });
  });

  describe('reportWebVitals', () => {
    it('reports web vitals to callback', () => {
      const mockCallback = vi.fn();
      const mockMetric = {
        name: 'LCP',
        value: 2500,
        id: 'mock-id',
      };

      reportWebVitals(mockCallback);
      expect(mockCallback).toHaveBeenCalledWith(mockMetric);
    });
  });
});

describe('Performance Audit', () => {
  it('generates performance recommendations', async () => {
    const mockWebVitals = {
      LCP: 4000, // Poor
      FID: 50,   // Good
      CLS: 0.2,  // Needs Improvement
      FCP: 2000, // Poor
      TTFB: 800, // Poor
    };

    const result = await runPerformanceAudit(mockWebVitals);

    expect(result).toHaveProperty('score');
    expect(result).toHaveProperty('recommendations');
    expect(result.recommendations).toContain(expect.stringContaining('Largest Contentful Paint'));
    expect(result.score).toBeLessThan(90); // Score should be lower due to poor metrics
  });

  it('handles missing metrics gracefully', async () => {
    const mockWebVitals = {
      LCP: undefined,
      FID: 50,
      CLS: undefined,
    };

    const result = await runPerformanceAudit(mockWebVitals);

    expect(result).toHaveProperty('score');
    expect(result).toHaveProperty('recommendations');
    expect(result.recommendations).toContain(expect.stringContaining('missing metrics'));
  });

  it('provides accurate scoring', async () => {
    const perfectMetrics = {
      LCP: 1500, // Excellent
      FID: 30,   // Excellent
      CLS: 0.05, // Excellent
      FCP: 1000, // Excellent
      TTFB: 200, // Excellent
    };

    const result = await runPerformanceAudit(perfectMetrics);

    expect(result.score).toBeGreaterThanOrEqual(95);
    expect(result.recommendations).toHaveLength(0);
  });
});
