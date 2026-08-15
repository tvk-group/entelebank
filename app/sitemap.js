export default function sitemap() {
  const base = 'https://www.entelebank.com';
  return ['', '/regulatory', '/privacy', '/cookies', '/terms', '/security'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
