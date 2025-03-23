import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://sribalajiprinters.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/services/*'],
        disallow: ['/private/', '/admin/', '/api/'],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
} 