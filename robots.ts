import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/services', '/repeaters', 'projects', 'blog', 'contact'],
      disallow: ['/enquires', '/articles', 'dashboard', 'users', 'login'],
    },
    sitemap: 'https://baldwin.enterprises/sitemap.xml',
  }
}