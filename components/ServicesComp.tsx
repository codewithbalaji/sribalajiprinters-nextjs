"use client"
import React, { useState } from 'react';
import { servicesData } from '@/data/servicesData';
import ServiceDetail, { ServiceItem } from '@/components/ServiceDetail';
import ContactCTA from '@/components/ContactCTA';
import Image from 'next/image';
const ServicesComp = () => {
  const [activeCategory, setActiveCategory] = useState(servicesData[0].id);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const activeServices = servicesData.find(category => category.id === activeCategory)?.services || [];

  return (
    <>      
      <div className="pt-32 pb-16 bg-balaji-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of printing solutions designed to meet all your business and personal needs.
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex justify-center mb-12 border-b border-gray-200 overflow-x-auto">
            {servicesData.map(category => (
              <button
                key={category.id}
                className={`service-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSelectedService(null);
                }}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          {/* Service Grid */}
          {!selectedService && (
            <div className="service-grid">
              {activeServices.map(service => (
                <div 
                  key={service.id} 
                  className="service-card cursor-pointer" 
                  onClick={() => setSelectedService(service)}
                >
                  <Image 
                    src={service.image || "/placeholder.svg"} 
                    alt={service.title} 
                    className="service-card-image"
                    width={500}
                    height={500}
              
                  />
                  <div className="service-card-content">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Service Detail View */}
          {selectedService && (
            <div>
              <button 
                onClick={() => setSelectedService(null)}
                className="mb-6 flex items-center text-balaji-blue hover:text-balaji-purple transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to all services
              </button>
              <ServiceDetail service={selectedService} />
            </div>
          )}
        </div>
      </div>
      <ContactCTA />
    </>
  );
};

export default ServicesComp;
