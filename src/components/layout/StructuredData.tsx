import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Priyanshu',
    url: 'https://your-portfolio-url.com',
    sameAs: [
      'https://github.com/your-github',
      'https://linkedin.com/in/your-linkedin',
      'https://twitter.com/your-twitter'
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'PES MCOE'
    },
    description: 'Full Stack Developer specializing in modern web applications, AI/ML, and open source contributions.',
    knowsAbout: [
      'Web Development',
      'React',
      'TypeScript',
      'Node.js',
      'AI/ML',
      'Open Source Development'
    ],
    image: 'https://your-portfolio-url.com/profile-image.jpg',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'PES MCOE'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
