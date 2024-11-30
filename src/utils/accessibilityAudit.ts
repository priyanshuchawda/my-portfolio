import axe from 'axe-core';

export interface AccessibilityIssue {
  id: string;
  impact: 'minor' | 'moderate' | 'serious' | 'critical';
  description: string;
  help: string;
  helpUrl: string;
}

export class AccessibilityAudit {
  private static isRunning = false;

  static async runAudit(rootElement?: HTMLElement): Promise<AccessibilityIssue[]> {
    if (this.isRunning) {
      console.warn('Accessibility audit is already running. Skipping this request.');
      return [];
    }

    const element = rootElement || document.body;
    this.isRunning = true;
    
    try {
      const results = await axe.run(element);
      return results.violations.map(violation => ({
        id: violation.id,
        impact: violation.impact as AccessibilityIssue['impact'],
        description: violation.description,
        help: violation.help,
        helpUrl: violation.helpUrl
      }));
    } catch (error) {
      console.error('Accessibility audit failed:', error);
      return [];
    } finally {
      this.isRunning = false;
    }
  }

  static logIssues(issues: AccessibilityIssue[]) {
    if (issues.length === 0) {
      console.log(' No accessibility issues found!');
      return;
    }

    console.group(' Accessibility Issues');
    issues.forEach(issue => {
      console.group(`Impact: ${issue.impact.toUpperCase()} - ${issue.id}`);
      console.warn(issue.description);
      console.log('Help:', issue.help);
      console.log('More Info:', issue.helpUrl);
      console.groupEnd();
    });
    console.groupEnd();
  }

  static calculateAccessibilityScore(issues: AccessibilityIssue[]): number {
    const impactWeights = {
      'minor': 1,
      'moderate': 3,
      'serious': 5,
      'critical': 10
    };

    const totalImpact = issues.reduce((score, issue) => {
      return score + (impactWeights[issue.impact] || 0);
    }, 0);

    // Base score of 100, deduct points for issues
    const baseScore = 100;
    const deductedScore = Math.max(0, baseScore - totalImpact);

    return deductedScore;
  }

  static async auditPage(): Promise<{
    score: number;
    issues: AccessibilityIssue[];
  }> {
    const issues = await this.runAudit();
    const score = this.calculateAccessibilityScore(issues);

    this.logIssues(issues);

    return { score, issues };
  }
}

export const runAccessibilityAudit = () => {
  if (typeof window !== 'undefined') {
    return AccessibilityAudit.auditPage();
  }
  return Promise.resolve({ score: 100, issues: [] });
};
