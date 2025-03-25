"use client"
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Image from 'next/image';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slides = [
    {
      title: "Digital Printing Services",
      description: "Fast and high-quality digital printing for keychains, mugs, brochures, and more. Perfect for small batches with vibrant colors.",
      image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742660220/PrintingServices-1024x683_sc1v65.jpg",
      alt: "Digital Printing Products"
    },
    {
      title: "Offset Printing Services",
      description: "High-volume printing with precise color accuracy. Ideal for brochures, magazines, and business cards.",
      image: "https://res.cloudinary.com/dyj3rywju/image/upload/v1742545380/digitalprinting-min_ft5fpc.jpg",
      alt: "Offset Printing Materials"
    },
    {
      title: "Screen Printing Services",
      description: "Durable and vibrant prints on T-shirts, mugs, and promotional items. Best for bulk apparel printing.",
      image: "https://res.cloudinary.com/dyj3rywju/image/upload/v1742545365/screenprinting-min_lpfnxr.jpg",
      alt: "Screen Printed Products"
    }
  ];

  return (
    <section className="gradient-bg pt-32 pb-16 overflow-hidden">
      <div className="container px-4 mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {slide.description}
                    </p>

                    <Button className="bg-balaji-purple hover:bg-balaji-purple/90 text-white rounded-full px-6 py-2 h-auto flex items-center gap-2 font-medium animate-fade-in shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      CONTACT US <ArrowRight size={16} />
                    </Button>
                  </div>

                  <div className={`flex justify-center transition-all duration-700 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
                    <div className="relative animate-float">
                      <Image 
                        src={slide.image} 
                        alt={slide.alt} 
                        className="max-w-full h-auto rounded-lg shadow-xl"
                        width={700}
                        height={400}
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 left-0 right-auto mr-2" />
            <CarouselNext className="relative inset-0 translate-y-0 right-0 left-auto ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
