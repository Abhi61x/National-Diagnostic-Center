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
  const domain = 'https://nationaldiagnostic.in';
  const canonicalUrl = `${domain}${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to update or create meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateOG = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Meta Tags
    updateMeta('description', description);
    if (keywords) {
        updateMeta('keywords', keywords);
    }

    // Update Open Graph
    updateOG('og:title', title);
    updateOG('og:description', description);
    updateOG('og:url', canonicalUrl);
    
    // Update Twitter Card
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);

    // 4. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 5. Inject Schema.org JSON-LD
    // We remove existing schema script to prevent duplicates if navigating
    const existingScript = document.getElementById('schema-json-ld');
    if (existingScript) {
        existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'schema-json-ld';
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
        // Cleanup function if needed, mainly for the schema script
        const script = document.getElementById('schema-json-ld');
        if (script) script.remove();
    };

  }, [title, description, keywords, canonicalUrl, schema]);

  return null;
};

export default SEO;