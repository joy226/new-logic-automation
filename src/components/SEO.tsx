import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}

export function SEO({ title, description, path = '', noindex = false }: SEOProps) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    const href = `https://newlogicautomation.com${path}`;
    if (canonical) {
      canonical.setAttribute('href', href);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = href;
      document.head.appendChild(link);
    }

    if (noindex) {
      let noindexMeta = document.querySelector('meta[name="robots"]');
      if (!noindexMeta) {
        noindexMeta = document.createElement('meta');
        noindexMeta.setAttribute('name', 'robots');
        document.head.appendChild(noindexMeta);
      }
      noindexMeta.setAttribute('content', 'noindex, nofollow');
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.setAttribute('content', 'index, follow');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [title, description, path, noindex]);

  return null;
}
