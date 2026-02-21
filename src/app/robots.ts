import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: [
      'https://venezuelanews.app/sitemap.xml',
      'https://venezuelanews.app/sitemap-news.xml',
    ],
  }
}
