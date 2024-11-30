import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize('YOUR-GA4-MEASUREMENT-ID'); // Replace with your GA4 measurement ID
};

// Track page views
export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

// Track events
export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Track user interactions
export const trackUserInteraction = (elementName: string, action: string) => {
  logEvent('User Interaction', action, elementName);
};

// Track external link clicks
export const trackExternalLink = (url: string) => {
  logEvent('External Link', 'Click', url);
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  logEvent('Form Submission', success ? 'Success' : 'Failed', formName);
};

// Track project views
export const trackProjectView = (projectName: string) => {
  logEvent('Project', 'View', projectName);
};

// Track skill category interactions
export const trackSkillInteraction = (skillCategory: string) => {
  logEvent('Skills', 'View', skillCategory);
};
