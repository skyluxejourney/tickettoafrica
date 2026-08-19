// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAirlineSlugs } from './airlines/[slug]/constants';
import { COMPANY } from './constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${COMPANY.domain}`;
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];
  
  // Dynamic airline pages
  const airlineSlugs = getAirlineSlugs();
  const airlinePages = airlineSlugs.map((slug) => ({
    url: `${baseUrl}/airlines/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  
  return [...staticPages, ...airlinePages];
}