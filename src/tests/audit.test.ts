import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AccessibilityAudit } from '../utils/accessibilityAudit';

describe('AccessibilityAudit', () => {
  beforeEach(() => {
    // Mock DOM elements
    document.body.innerHTML = `
      <div>
        <img src="test.jpg" />
        <button>Click me</button>
        <a href="#">Link</a>
      </div>
    `;
  });

  describe('runAudit', () => {
    it('detects missing alt text', async () => {
      const issues = await AccessibilityAudit.runAudit();
      
      expect(issues).toContainEqual(expect.objectContaining({
        id: 'image-alt',
        impact: 'serious'
      }));
    });

    it('handles empty DOM gracefully', async () => {
      document.body.innerHTML = '';
      const issues = await AccessibilityAudit.runAudit();
      
      expect(Array.isArray(issues)).toBe(true);
    });
  });

  describe('calculateAccessibilityScore', () => {
    it('calculates perfect score for no issues', () => {
      const score = AccessibilityAudit.calculateAccessibilityScore([]);
      expect(score).toBe(100);
    });

    it('reduces score based on issue impact', () => {
      const issues = [
        { id: 'test1', impact: 'critical', description: '', help: '', helpUrl: '' },
        { id: 'test2', impact: 'serious', description: '', help: '', helpUrl: '' }
      ];
      
      const score = AccessibilityAudit.calculateAccessibilityScore(issues);
      expect(score).toBeLessThan(100);
    });

    it('weights critical issues more heavily', () => {
      const criticalIssues = [
        { id: 'test1', impact: 'critical', description: '', help: '', helpUrl: '' }
      ];
      
      const minorIssues = [
        { id: 'test2', impact: 'minor', description: '', help: '', helpUrl: '' }
      ];
      
      const criticalScore = AccessibilityAudit.calculateAccessibilityScore(criticalIssues);
      const minorScore = AccessibilityAudit.calculateAccessibilityScore(minorIssues);
      
      expect(criticalScore).toBeLessThan(minorScore);
    });
  });

  describe('logIssues', () => {
    beforeEach(() => {
      vi.spyOn(console, 'group');
      vi.spyOn(console, 'warn');
      vi.spyOn(console, 'log');
    });

    it('logs no issues message when array is empty', () => {
      AccessibilityAudit.logIssues([]);
      expect(console.log).toHaveBeenCalledWith('✅ No accessibility issues found!');
    });

    it('logs issues with proper formatting', () => {
      const issues = [{
        id: 'test',
        impact: 'critical',
        description: 'Test description',
        help: 'Test help',
        helpUrl: 'https://test.com'
      }];

      AccessibilityAudit.logIssues(issues);
      
      expect(console.group).toHaveBeenCalledWith('🚨 Accessibility Issues');
      expect(console.warn).toHaveBeenCalledWith('Test description');
    });
  });

  describe('auditPage', () => {
    it('returns both score and issues', async () => {
      const result = await AccessibilityAudit.auditPage();
      
      expect(result).toHaveProperty('score');
      expect(result).toHaveProperty('issues');
      expect(typeof result.score).toBe('number');
      expect(Array.isArray(result.issues)).toBe(true);
    });

    it('handles errors gracefully', async () => {
      // Mock runAudit to throw an error
      vi.spyOn(AccessibilityAudit, 'runAudit').mockRejectedValueOnce(new Error('Test error'));
      
      const result = await AccessibilityAudit.auditPage();
      
      expect(result.score).toBe(0);
      expect(result.issues).toEqual([]);
    });
  });
});
