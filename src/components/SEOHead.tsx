import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'service';
  ogImage?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  speakableSelectors?: string[];
  howToSteps?: Array<{ name: string; text: string; url?: string }>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = 'AI development company, agentic AI, AI agents, generative AI development, custom software development, SaaS product development',
  canonicalPath,
  ogType = 'website',
  ogImage = 'https://fiversesystems.com/logo.png',
  schema,
  breadcrumbs,
  faqs,
  speakableSelectors = ['.aeo-definition', '.aeo-direct-answer'],
  howToSteps
}) => {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `https://fiversesystems.com${currentPath === '/' ? '' : currentPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to update or create meta tags
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);

    // 3. Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);

    // 4. Twitter
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Dynamic JSON-LD Structured Data
    const scriptId = 'dynamic-page-jsonld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const schemaGraph: Record<string, unknown>[] = [];

    // Optional breadcrumb list schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaGraph.push({
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((bc, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': bc.name,
          'item': `https://fiversesystems.com${bc.url}`
        }))
      });
    }

    // Optional FAQ Page schema
    if (faqs && faqs.length > 0) {
      schemaGraph.push({
        '@type': 'FAQPage',
        'mainEntity': faqs.map(f => ({
          '@type': 'Question',
          'name': f.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.answer
          }
        }))
      });
    }

    // Optional HowTo Schema for Step-by-Step Methodology
    if (howToSteps && howToSteps.length > 0) {
      schemaGraph.push({
        '@type': 'HowTo',
        'name': `${title} — Execution & Delivery Methodology`,
        'description': description,
        'step': howToSteps.map((s, idx) => ({
          '@type': 'HowToStep',
          'position': idx + 1,
          'name': s.name,
          'text': s.text,
          'url': s.url || canonicalUrl
        }))
      });
    }

    // Optional SpeakableSpecification Schema for Voice Search & Answer Engines
    if (speakableSelectors && speakableSelectors.length > 0) {
      schemaGraph.push({
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        'url': canonicalUrl,
        'name': title,
        'description': description,
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': speakableSelectors
        }
      });
    }

    // Custom provided schema
    if (schema) {
      if (Array.isArray(schema)) {
        schemaGraph.push(...schema);
      } else {
        schemaGraph.push(schema);
      }
    }

    if (schemaGraph.length > 0) {
      scriptElement.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': schemaGraph
      });
    } else {
      scriptElement.textContent = '';
    }

    return () => {
      // Cleanup on unmount if needed
    };
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, schema, breadcrumbs, faqs, speakableSelectors, howToSteps]);

  return null;
};
