import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/services`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/quote`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/gallery`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/testimonials`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.5 },
  ];
}