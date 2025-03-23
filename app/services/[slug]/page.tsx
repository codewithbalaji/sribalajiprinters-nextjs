import { Metadata, Viewport } from 'next'
import ServicePage from "@/components/ServicePage"
import { servicesData } from '@/data/servicesData'

type Props = {
  params: Promise<{ slug: string }>
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light'
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const [serviceId] = slug.split('-')
  const service = servicesData
    .flatMap(cat => cat.services)
    .find(s => s.id.startsWith(serviceId))
  const location = slug.split('-').slice(1).join(' ').toUpperCase()

  return {
    title: service ? `${service.title} in ${location} | Sri Balaji Printers` : 'Printing Services',
    description: service ? `${service.description} Available in ${location}. Contact Sri Balaji Printers for professional ${service.title.toLowerCase()} services.` : '',
    alternates: {
      canonical: `/services/${slug}`
    },
    openGraph: {
      title: service ? `${service.title} in ${location} | Sri Balaji Printers` : 'Printing Services',
      description: service ? `${service.description} Available in ${location}. Contact Sri Balaji Printers for professional ${service.title.toLowerCase()} services.` : '',
      url: `/services/${slug}`,
      images: [
        {
          url: service?.image || '/services-og.jpg',
          width: 1200,
          height: 630,
          alt: service ? `${service.title} - Sri Balaji Printers` : 'Printing Services',
        },
      ],
      type: 'website',
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const [serviceId] = slug.split('-')
  return <ServicePage serviceId={serviceId} />
} 