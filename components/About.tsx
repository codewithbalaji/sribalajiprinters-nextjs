"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={aboutRef} className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="relative">
              <Image 
                src="https://res.cloudinary.com/dyj3rywju/image/upload/v1742625154/sri-banner_lsiuve.jpg" 
                alt="Printing Products" 
                className="w-full h-auto rounded-lg shadow-xl"
                width={500}
                height={500}
              />
              
              <div className="absolute -bottom-8 -right-3 bg-white rounded-lg shadow-lg p-4 w-28 h-28 flex flex-col items-center justify-center ">
                <span className="text-3xl font-bold text-balaji-purple">24+</span>
                <span className="text-xs text-gray-500 text-center">Years exp.</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <div className="inline-block mb-2">
              <span className="bg-balaji-lightblue text-balaji-blue px-4 py-1 rounded-full text-sm font-medium">INDUSTRY LEADER SINCE 1999</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome To <span className="text-balaji-purple">Sri Balaji Printers</span></h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              Sri Balaji Printers was established in the year 1999. We are leaders in commercial printing with a high level machine setup for creating complex jobs. We strive to be a genuine partner for every business client, understanding the intricacies of their printing needs.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in providing printing solutions for Promotional advertising, brochures, catalogs, books, magazines, corporate stationary, packing, slip sheet, offset printing, and retail visual identity and promotional objects.
            </p>
            
            <Link href="/about" className="inline-block">
              <button className="bg-balaji-blue hover:bg-balaji-blue/90 text-white rounded-full px-6 py-2 font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
