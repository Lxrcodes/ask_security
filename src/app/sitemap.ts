import { MetadataRoute } from 'next';

const BASE_URL = 'https://asksecurity.co.uk';

const servicePages = [
  'car-park-security',
  'close-protection-security',
  'concierge-security',
  'construction-site-security',
  'corporate-security',
  'film-tv-theatre-security',
  'hotel-security',
  'industrial-security',
  'key-holding-alarm-response',
  'mobile-patrols',
  'private-investigation',
  'residential-security',
  'traffic-marshals',
  'vacant-property-security',
];

const locationPages = [
  'central-london',
  'north-london',
  'hertfordshire',
  'bedfordshire',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: BASE_URL,                        lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`,          lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/coverage-areas`,    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contact`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pricing`,           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faq`,               lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms`,             lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];

  const services: MetadataRoute.Sitemap = servicePages.map(slug => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const locations: MetadataRoute.Sitemap = locationPages.map(slug => ({
    url: `${BASE_URL}/coverage-areas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...core, ...services, ...locations];
}
