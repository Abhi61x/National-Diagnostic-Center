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
    const updateMeta = (name: string, content: string, property: boolean = false) => {
      const attr = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    updateMeta('description', description);
    updateMeta('og:description', description, true);
    updateMeta('og:title', title, true);
    updateMeta('twitter:description', description);
    updateMeta('twitter:title', title);
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