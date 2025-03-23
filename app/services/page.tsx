import React from 'react'
import ServicesComp from '@/components/ServicesComp'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Comprehensive Printing Solutions',
  description: 'Explore our wide range of printing services including digital printing, offset printing, large format printing, business cards, brochures, and more.',
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'Our Services - Comprehensive Printing Solutions | Sri Balaji Printers',
    description: 'Explore our wide range of printing services including digital printing, offset printing, large format printing, business cards, brochures, and more.',
    url: '/services',
    images: [
      {
        url: '/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Sri Balaji Printers Services',
      },
    ],
    type: 'website',
  },
}

const servicesPage = () => {
  return (
    <>
      <ServicesComp />
    </>
  )
}

export default servicesPage