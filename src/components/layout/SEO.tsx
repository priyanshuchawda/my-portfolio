import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
}

const SEO = ({
  title,
  description = 'Portfolio of Priyanshu Chawda, a Full Stack Developer specializing in React, TypeScript, and Node.js',
  image = '/og-image.png',
  url = 'https://your-portfolio-url.com',
  keywords = 'full stack developer, web developer, React, TypeScript, Node.js, portfolio',
}: SEOProps) => {
  const siteTitle = 'Priyanshu Chawda - Full Stack Developer';
  const pageTitle = title ? `${title} | Priyanshu Chawda` : siteTitle;
  const canonicalUrl = url.endsWith('/') ? url.slice(0, -1) : url;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Priyanshu Chawda',
    url: canonicalUrl,
    jobTitle: 'Full Stack Developer',
    description: description,
    image: image,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'PES MCOE'
    },
    sameAs: [
      'https://github.com/your-github',
      'https://linkedin.com/in/your-linkedin',
      'https://twitter.com/your-twitter'
    ],
    knowsAbout: [
      'Web Development',
      'React',  
      'TypeScript',
      'Node.js',
      'AI/ML',
      'Open Source Development'
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Priyanshu Chawda" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Priyanshu Chawda Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Apple Mobile Web App Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={pageTitle} />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
