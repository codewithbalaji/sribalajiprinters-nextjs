
import React from 'react';
import Image from 'next/image';
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ServiceDetailProps {
  service: ServiceItem | null;
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  if (!service) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Please select a service to view details</p>
      </div>
    );
  }

  return (
    <div className="p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <Image 
              src={service.image || "/placeholder.svg"} 
              alt={service.title} 
              className="w-full h-64 object-cover "
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <button className="bg-balaji-blue hover:bg-balaji-blue/90 text-white px-6 py-2 rounded-full transition-all duration-300">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
