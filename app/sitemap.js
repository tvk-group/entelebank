export default function sitemap() {
  const base = 'https://www.entelebank.com';
  const paths = ['', '/about', '/personal', '/business', '/infrastructure', '/security', '/governance', '/regulatory', '/privacy', '/cookies', '/terms'];
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : ['/about','/regulatory','/security'].includes(path) ? 0.8 : 0.7 }));
}
