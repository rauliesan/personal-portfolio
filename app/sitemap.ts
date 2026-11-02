import { projects } from '@/lib/data/projects';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rauliebana.dev';
  const buildDate = '2026-11-02T12:00:00.000Z';

  const projectUrls = projects.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: buildDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: buildDate, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/proyectos`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.9 },
    ...projectUrls,
  ];
}

