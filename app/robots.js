export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: 'https://www.entelebank.com/sitemap.xml',
    host: 'https://www.entelebank.com',
  };
}
