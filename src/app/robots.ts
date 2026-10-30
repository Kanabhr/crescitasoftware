import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/structuredData'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', disallow: ['/admin', '/api'] },
    sitemap: new URL('/sitemap.xml', getSiteUrl()).toString(),
  }
}
