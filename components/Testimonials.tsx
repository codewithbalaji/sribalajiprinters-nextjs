"use client"
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajnikanth",
    position: "Manager of ABC Film Institute",
    text: "I've been using the services of Sri Balaji Printers for past couple years as a valued customer. With a limited budget, they far exceed my expectations in terms of quality and service. The final output prints are consistently pristine and vibrant. I highly recommend Sri Balaji Printers for its exceptional service and dedication to customer satisfaction.",
    rating: 5,
  },
  {
    id: 2,
    name: "Amitabh",
    position: "Director at XYZ Media",
    text: "Working with Sri Balaji Printers has been an absolute pleasure. Their attention to detail and commitment to quality is unmatched in the industry. They consistently deliver exceptional print materials that help our campaigns stand out.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priyanka",
    position: "Marketing Head at Global Solutions",
    text: "Sri Balaji Printers consistently delivers high-quality printing services that exceed our expectations. Their team is professional, responsive, and always goes the extra mile to ensure our satisfaction.",
    rating: 5,
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

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
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="container px-4  mx-auto">
        <div className={`text-center mb-12 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Hear from Our <span className="text-balaji-purple">Happy<br />Clients</span>
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className={`bg-white rounded-xl shadow-lg p-8 testimonial-card transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="flex items-center mb-6">
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFCB45">
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          >
            <ChevronLeft className="text-gray-600" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          >
            <ChevronRight className="text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? 'bg-balaji-purple scale-125' : 'bg-gray-300'
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
