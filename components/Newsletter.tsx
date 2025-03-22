"use client"
import { useEffect, useRef, useState } from 'react';

const Newsletter = () => {
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
    <section ref={sectionRef} className="py-10 md:py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className={`bg-balaji-darkgray rounded-lg md:rounded-xl shadow-lg md:shadow-xl p-6 md:p-10 text-center transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
            Join Us for Exclusive
            <span className="md:hidden"> Discounts and Deals!</span>
            <span className="hidden md:block">
              <br />Discounts and Deals!
            </span>
          </h2>
          
          <div className="flex flex-col md:flex-row max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Email"
              className="w-full md:flex-1 rounded-full md:rounded-l-full md:rounded-r-none px-6 py-3 border-0 focus:ring-2 focus:ring-balaji-purple focus:outline-none mb-3 md:mb-0"
            />
            <button className="w-full md:w-auto bg-balaji-purple hover:bg-balaji-purple/90 text-white rounded-full md:rounded-l-none md:rounded-r-full px-6 py-3 font-medium transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
