import React from 'react'
import ServiceDetail from './ServiceDetail'
import { servicesData } from '@/data/servicesData'

interface ServicePageProps {
  serviceId: string
}

const ServicePage = ({ serviceId }: ServicePageProps) => {
  const service = servicesData
    .flatMap(cat => cat.services)
    .find(s => s.id.startsWith(serviceId))
  
  return (
    <div className="container mx-auto px-4 py-8">
      <ServiceDetail service={service || null} />
    </div>
  )
}

export default ServicePage