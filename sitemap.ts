import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://baldwin.enterprises',
      lastModified: new Date(),
    },
    {
      url: 'https://baldwin.enterprises/services',
      lastModified: new Date(),
    },
    {
      url: 'https://baldwin.enterprises/projects',
      lastModified: new Date(),
    },
    {
        url: 'https://baldwin.enterprises/contact',
        lastModified: new Date(),
      },
      {
        url: 'https://baldwin.enterprises/about',
        lastModified: new Date(),
      },
  ]
}