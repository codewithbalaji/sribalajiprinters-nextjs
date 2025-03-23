import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch for Your Printing Needs',
  description: 'Contact Sri Balaji Printers in Chennai for all your printing requirements. Get quotes, discuss your projects, or visit our facility in Ambattur.',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact Sri Balaji Printers - Get in Touch for Your Printing Needs',
    description: 'Contact Sri Balaji Printers in Chennai for all your printing requirements. Get quotes, discuss your projects, or visit our facility in Ambattur.',
    url: '/contact',
    images: [
      {
        url: '/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Sri Balaji Printers',
      },
    ],
    type: 'website',
  },
}

export default function ContactPage() {
  return <Contact />
}