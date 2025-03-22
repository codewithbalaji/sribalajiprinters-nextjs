"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'


type ServiceCardProps = {
  title: string;
  imageSrc: string;
  delay: number;
};

const ServiceCard = ({ title, imageSrc, delay }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="h-48 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title}
          width={500}
          height={500}
          className="w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-medium text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className={`text-center mb-12 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block mb-2">
            <span className="bg-balaji-lightblue text-balaji-blue px-4 py-1 rounded-full text-sm font-medium">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Premier One-Stop<br />
            Custom <span className="text-balaji-purple">Print Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <ServiceCard 
            title="Invitation printing" 
            imageSrc="https://res.cloudinary.com/dyj3rywju/image/upload/v1742625153/service2_mdiqho.webp"
            delay={0}
          />
          <ServiceCard 
            title="Bill Book printing" 
            imageSrc="https://res.cloudinary.com/dyj3rywju/image/upload/v1742625153/service3_ealhna.webp"
            delay={100}
          />
          <ServiceCard 
            title="Visting Card printing" 
            imageSrc="https://res.cloudinary.com/dyj3rywju/image/upload/v1742625153/service4_xsw0qf.webp"
            delay={200}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ServiceCard 
            title="Flyers printing" 
            imageSrc="https://res.cloudinary.com/dyj3rywju/image/upload/v1742625153/service5_wnk9tn.webp"
            delay={300}
          />
          <ServiceCard 
            title="Banners printing" 
            imageSrc="https://res.cloudinary.com/dyj3rywju/image/upload/v1742625153/service6_b7w4g4.webp"
            delay={400}
          />
          <ServiceCard 
            title="Catalogs printing" 
            imageSrc="https://res.cloudinary.com/dyj3rywju/image/upload/v1742625153/service7_i51h0v.webp"
            delay={500}
          />
        </div>

        <div className="text-center">
          <button onClick={() => router.push('/services')} className={`bg-balaji-purple hover:bg-balaji-purple/90 text-white rounded-full px-6 py-2 font-medium transition-all duration-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          } hover:shadow-lg hover:-translate-y-1 delay-700`}>
            SEE ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
