import { MetadataRoute } from 'next'
import { servicesData } from '@/data/servicesData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://sribalajiprinters.com'
  const locations = [
    'chennai', 'ambattur', 'avadi', 'poonamallee', 'thirumullaivoyal', 'mogappair', 
    'tambaram', 'koyambedu', 'porur', 'guindy', 'annanagar', 'velachery', 'kandanchavadi', 'thiruvallur',
    't_nagar', 'mylapore', 'adyar', 'perambur', 'kilpauk', 'egmore', 'triplicane', 'royapettah', 
    'nungambakkam', 'saidapet', 'vadapalani', 'alwarpet', 'royapuram', 'tondiarpet', 'perungudi', 
    'sholinganallur', 'pallavaram', 'chromepet', 'medavakkam', 'madipakkam',
    'thiruvottiyur', 'minjur', 'red_hills', 'madhavaram', 'periyapalayam', 'sriperumbudur', 
    'oragadam', 'urapakkam', 'guduvanchery', 'maraimalai_nagar', 'chengalpattu', 'mahabalipuram', 
    'kelambakkam', 'thiruporur', 'manali', 'ennore'
];


  // Base URLs
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Generate service URLs with locations
  const serviceUrls: MetadataRoute.Sitemap = servicesData.flatMap(category => 
    category.services.flatMap(service => 
      locations.map(location => ({
        url: `${baseUrl}/services/${service.id}-${location}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
    )
  )

  return [...staticUrls, ...serviceUrls]
} 