import type { Metadata } from 'next'
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Vision from '@/components/Vision';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'Sri Balaji Printers - Professional Printing Services in Chennai',
  description: 'Leading printing service provider in Chennai offering digital printing, offset printing, and screen printing. Get high-quality prints for your business needs.',
  openGraph: {
    title: 'Sri Balaji Printers - Professional Printing Services in Chennai',
    description: 'Leading printing service provider in Chennai offering digital printing, offset printing, and screen printing. Get high-quality prints for your business needs.',
    url: '/',
    siteName: 'Sri Balaji Printers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sri Balaji Printers - Professional Printing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const Index = () => {
  return (
      <main>
        <Hero />
        <About />
        <Services />
        <Vision />
        <Testimonials />
        <Newsletter />
      </main>
  );
};

export default Index;
