import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, schema }) => {
  const location = useLocation();
  const domain = 'https://nationaldiagnostic.vercel.app';
  const canonicalUrl = `${domain}${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    document.title = title;
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // Schema injection
    if (schema) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, schema]);

  return null;
};

export default SEO;