import { describe, it, expect } from 'vitest';
import { WebVitals, trackWebVitals } from '../utils/performance';

describe('Performance Tracking', () => {
  const mockVitals: WebVitals = {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 200,
    fcp: 1000,
    inp: 200
  };

  it('should track web vitals', () => {
    const vitals = trackWebVitals(mockVitals);
    expect(vitals).toEqual(mockVitals);
  });

  it('should handle missing values', () => {
    const incompleteVitals: Partial<WebVitals> = {
      lcp: 2500,
      fid: 100,
      cls: 0.1
    };
    
    const vitals = trackWebVitals(incompleteVitals as WebVitals);
    expect(vitals.lcp).toBe(2500);
    expect(vitals.fid).toBe(100);
    expect(vitals.cls).toBe(0.1);
    expect(vitals.ttfb).toBeDefined();
    expect(vitals.fcp).toBeDefined();
    expect(vitals.inp).toBeDefined();
  });

  it('should handle invalid values', () => {
    const invalidVitals = {
      lcp: -1,
      fid: 0,
      cls: -0.1,
      ttfb: -100,
      fcp: -500,
      inp: -200
    };
    
    const vitals = trackWebVitals(invalidVitals);
    expect(vitals.lcp).toBeGreaterThanOrEqual(0);
    expect(vitals.fid).toBeGreaterThanOrEqual(0);
    expect(vitals.cls).toBeGreaterThanOrEqual(0);
    expect(vitals.ttfb).toBeGreaterThanOrEqual(0);
    expect(vitals.fcp).toBeGreaterThanOrEqual(0);
    expect(vitals.inp).toBeGreaterThanOrEqual(0);
  });
});
