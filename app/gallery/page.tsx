import type { Metadata } from 'next'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Gallery - Our Printing Portfolio and Work Samples',
  description: 'View our portfolio of printing projects including business cards, brochures, banners, and more. See the quality and craftsmanship of Sri Balaji Printers.',
  alternates: {
    canonical: '/gallery'
  },
  openGraph: {
    title: 'Gallery - Sri Balaji Printers Portfolio and Work Samples',
    description: 'View our portfolio of printing projects including business cards, brochures, banners, and more. See the quality and craftsmanship of Sri Balaji Printers.',
    url: '/gallery',
    images: [
      {
        url: '/gallery-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Sri Balaji Printers Gallery',
      },
    ],
    type: 'website',
  },
}

export default function GalleryPage() {
  return <Gallery />
}
