import axe from 'axe-core';

export type ImpactLevel = 'minor' | 'moderate' | 'serious' | 'critical';

export interface AccessibilityIssue {
  id: string;
  impact: ImpactLevel;
  description: string;
  help: string;
  helpUrl: string;
}

export interface AuditResult {
  score: number;
  issues: AccessibilityIssue[];
}
 
function calculateAccessibilityScore(issues: AccessibilityIssue[]): number {
  const impactWeights: Record<ImpactLevel, number> = {
    minor: 1,
    moderate: 2,
    serious: 3,
    critical: 4,
  };

  if (issues.length === 0) return 100;

  const totalWeight = Object.values(impactWeights).reduce((a, b) => a + b, 0);
  const issueScore = issues.reduce((score, issue) => {
    return score + impactWeights[issue.impact];
  }, 0);

  const normalizedScore = (issueScore / (issues.length * totalWeight)) * 100;
  return Math.max(0, 100 - normalizedScore);
}

export class AccessibilityAudit {
  private static isRunning = false;

  static async runAudit(rootElement?: HTMLElement): Promise<AuditResult> {
    if (this.isRunning) {
      console.warn('Accessibility audit is already running. Skipping this request.');
      return { score: 0, issues: [] };
    }

    const element = rootElement || document.body;
    this.isRunning = true;
    
    try {
      // @ts-ignore - axe-core types are not up to date
      const results = await axe.run(element, {
        runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
      });

      const issues = results.violations.map((violation: any) => ({
        id: violation.id,
        impact: (violation.impact || 'moderate') as ImpactLevel,
        description: violation.description,
        help: violation.help,
        helpUrl: violation.helpUrl,
      }));

      const score = calculateAccessibilityScore(issues);
      return { score, issues };
    } catch (error) {
      console.error('Accessibility audit failed:', error);
      return { score: 0, issues: [] };
    } finally {
      this.isRunning = false;
    }
  }

  static logIssues(issues: AccessibilityIssue[]): void {
    if (issues.length === 0) {
      console.log('No accessibility issues found.');
      return;
    }

    console.group('Accessibility Issues:');
    issues.forEach(issue => {
      console.group(`Issue: ${issue.id} (${issue.impact})`);
      console.log('Description:', issue.description);
      console.log('Help:', issue.help);
      console.log('Help URL:', issue.helpUrl);
      console.groupEnd();
    });
    console.groupEnd();
  }

  static async auditPage(): Promise<AuditResult> {
    const result = await this.runAudit();
    this.logIssues(result.issues);
    return result;
  }
}

export const runAccessibilityAudit = () => {
  if (typeof window !== 'undefined') {
    return AccessibilityAudit.auditPage();
  }
  return Promise.resolve({ score: 100, issues: [] });
};
