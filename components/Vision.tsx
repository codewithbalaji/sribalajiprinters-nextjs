"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="vision" ref={sectionRef} className="relative bg-balaji-darkgray text-white overflow-hidden">
      <div className="middle-wave"></div>
      <div className="container px-4 mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-6">Vision</h3>
            <p className="mb-6 leading-relaxed text-gray-300">
              To become Tamil Nadu&apos;s most trusted printing & marketing solutions provider with a long-term mission to set industry standards. We aim at providing exceptional customer service throughout each client&apos;s journey with us, ensuring that we deliver unique solutions that stand out among competitors.
            </p>
            <p className="leading-relaxed text-gray-300">
              We deeply understand the different requirements of our customers and strive to exceed their expectations with innovative solutions and a customer-first approach.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <Image 
              src="https://res.cloudinary.com/dyj3rywju/image/upload/v1742627720/wmremove-transformed_qov6vk.webp"
              alt="Vision" 
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
        <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-x-0 opaciIya1e0' : 'translate-x-16 opacity-0'}`}>
            <Image 
              src="https://res.cloudinary.com/dia8x6y6u/image/upload/v1742700896/goal-mission-teamwork-collaboration-with-icons-and-business-representation-vector_foumww.jpg"
              alt="mission" 
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          <div id="mission" className={`order-1 md:order-2 transition-all duration-700 delay-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-6">Mission</h3>
            <p className="mb-6 leading-relaxed text-gray-300">
              To provide innovative solutions to accelerate our clients&apos; business growth by delivering high-quality printing services. We aim to establish sustainable partnerships with our clients and produce memorable printed materials that effectively communicate their message.
            </p>
            <p className="leading-relaxed text-gray-300">
              Utilizing the latest technology and materials, we strive to deliver premium products at competitive prices, with a strong commitment to environmental responsibility in our printing processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
