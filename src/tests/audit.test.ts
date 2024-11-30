import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AccessibilityAudit, type AccessibilityIssue } from '../utils/accessibilityAudit';

describe('AccessibilityAudit', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should run audit successfully', async () => {
    const mockElement = document.createElement('div');
    const result = await AccessibilityAudit.runAudit(mockElement);
    
    expect(result).toHaveProperty('score');
    expect(result).toHaveProperty('issues');
    expect(Array.isArray(result.issues)).toBe(true);
  });

  it('should handle empty issues list', () => {
    const issues: AccessibilityIssue[] = [];
    AccessibilityAudit.logIssues(issues);
    // No assertions needed, just checking it doesn't throw
  });

  it('should log issues correctly', () => {
    const mockIssues: AccessibilityIssue[] = [
      {
        id: 'color-contrast',
        impact: 'serious',
        description: 'Elements must have sufficient color contrast',
        help: 'Ensure sufficient color contrast between elements',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.4/color-contrast',
      },
    ];

    const consoleSpy = vi.spyOn(console, 'group');
    AccessibilityAudit.logIssues(mockIssues);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should prevent concurrent audits', async () => {
    const mockElement = document.createElement('div');
    const firstAudit = AccessibilityAudit.runAudit(mockElement);
    const secondAudit = AccessibilityAudit.runAudit(mockElement);

    const [result1, result2] = await Promise.all([firstAudit, secondAudit]);
    expect(result1).toBeDefined();
    expect(result2).toBeDefined();
  });
});
