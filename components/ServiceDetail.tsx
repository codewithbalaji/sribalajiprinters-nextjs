import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
  benefits?: string[];
}

interface ServiceDetailProps {
  service: ServiceItem | null;
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link 
            href="/services" 
            className="bg-balaji-blue hover:bg-balaji-blue/90 text-white px-6 py-2 rounded-full transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex flex-col">
          {/* Hero Section */}
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image 
              src={service.image || "/placeholder.svg"} 
              alt={service.title}
              className="object-cover"
              fill
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                {service.title}
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 text-lg mb-8">{service.description}</p>

              {service.features && service.features.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-balaji-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.benefits && service.benefits.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-balaji-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex justify-center mt-8">
                <Link 
                  href="/contact" 
                  className="bg-balaji-blue hover:bg-balaji-blue/90 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-semibold"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
