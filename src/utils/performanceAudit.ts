import { WebVitals } from './performance';

interface AuditResult {
  score: number;
  metrics: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  recommendations: string[];
}

export class PerformanceAudit {
  private static calculatePerformanceScore(metrics: WebVitals): number {
    const { lcp, fid, cls } = metrics;
    
    // Performance scoring based on Web Vitals thresholds
    const lcpScore = lcp <= 2500 ? 100 : lcp <= 4000 ? 75 : 50;
    const fidScore = fid <= 100 ? 100 : fid <= 300 ? 75 : 50;
    const clsScore = cls <= 0.1 ? 100 : cls <= 0.25 ? 75 : 50;

    return Math.round((lcpScore + fidScore + clsScore) / 3);
  }

  private static generateRecommendations(metrics: WebVitals): string[] {
    const recommendations: string[] = [];

    if (metrics.lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint (LCP)');
      recommendations.push('- Reduce server response times');
      recommendations.push('- Optimize critical rendering path');
      recommendations.push('- Use efficient image formats');
    }

    if (metrics.fid > 100) {
      recommendations.push('Improve First Input Delay (FID)');
      recommendations.push('- Minimize main thread work');
      recommendations.push('- Break up long tasks');
      recommendations.push('- Optimize JavaScript execution');
    }

    if (metrics.cls > 0.1) {
      recommendations.push('Reduce Cumulative Layout Shift (CLS)');
      recommendations.push('- Set explicit sizes for media elements');
      recommendations.push('- Avoid inserting content above existing content');
      recommendations.push('- Use CSS `transform` for animations');
    }

    return recommendations;
  }

  static async runAudit(metrics: WebVitals): Promise<AuditResult> {
    // Simulate more complex audit with placeholders
    const performanceScore = this.calculatePerformanceScore(metrics);
    
    // Placeholder scores for other audit categories
    const accessibilityScore = 90; // Assume high accessibility
    const bestPracticesScore = 95; // Assume good practices
    const seoScore = 92; // Assume good SEO

    return {
      score: performanceScore,
      metrics: {
        performance: performanceScore,
        accessibility: accessibilityScore,
        bestPractices: bestPracticesScore,
        seo: seoScore
      },
      recommendations: this.generateRecommendations(metrics)
    };
  }

  static logAuditResults(auditResult: AuditResult) {
    console.group('🚀 Performance Audit Results');
    console.log('Overall Score:', auditResult.score);
    console.table(auditResult.metrics);
    
    console.group('🔍 Recommendations');
    auditResult.recommendations.forEach(rec => console.warn(rec));
    console.groupEnd();
    console.groupEnd();
  }
}

export const runPerformanceAudit = async (metrics: WebVitals) => {
  const auditResult = await PerformanceAudit.runAudit(metrics);
  PerformanceAudit.logAuditResults(auditResult);
  return auditResult;
};
