// app/robots.ts
import { MetadataRoute } from 'next';
import { COMPANY } from './constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/private/'],
    },
    sitemap: `https://${COMPANY.domain}/sitemap.xml`,
  };
}