import React from "react";
import About from "@/components/About";
import Vision from "@/components/Vision";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Our Printing Journey and Expertise',
  description: 'Learn about Sri Balaji Printers, our journey, expertise, and commitment to delivering high-quality printing services in Chennai since our establishment.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About Sri Balaji Printers - Our Printing Journey and Expertise',
    description: 'Learn about Sri Balaji Printers, our journey, expertise, and commitment to delivering high-quality printing services in Chennai since our establishment.',
    url: '/about',
    images: [
      {
        url: '/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About Sri Balaji Printers',
      },
    ],
    type: 'website',
  },
}

const AboutUs = () => {
  return (
    <>
      <div className="pt-32  bg-balaji-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 ">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Sri Balaji Printers
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto pb-12">
              Leading the printing industry with quality, innovation, and
              exceptional service since 1999.
            </p>
          </div>
        </div>
      </div>
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://res.cloudinary.com/dryhpaq1t/image/upload/v1742632032/ai-generated-closeup-of-a-factory-worker-using-a-digital-tablet-in-his-hand-free-photo_ad8kxe.jpg"
                alt="Our Team"
                className="w-full h-auto rounded-lg shadow-lg"
                width={500}
                height={500}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Since our establishment in 1999, Sri Balaji Printers has grown
                to become one of the most trusted names in the printing industry
                in Chennai. What started as a small printing shop has evolved
                into a comprehensive printing solution provider with
                state-of-the-art equipment and a dedicated team of
                professionals.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the past 24+ years, we have served thousands of clients,
                ranging from small businesses to large corporations, helping
                them communicate their brand message effectively through
                high-quality printing services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction
                has been the cornerstone of our success, and we continue to
                uphold these values as we expand our services and reach.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 bg-balaji-lightgray">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-12 pt-12 text-center text-gray-800  ">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-balaji-lightblue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-balaji-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                Quality Assurance
              </h3>
              <p className="text-gray-600 text-center">
                We maintain stringent quality control processes to ensure that
                every print job meets the highest standards of excellence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-balaji-lightblue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-balaji-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                Timely Delivery
              </h3>
              <p className="text-gray-600 text-center">
                We understand the importance of deadlines and are committed to
                delivering your printing projects on time, every time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-balaji-lightblue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-balaji-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                Industry Experience
              </h3>
              <p className="text-gray-600 text-center">
                With over 24 years of experience in the printing industry, we
                have the expertise to handle printing projects of any
                complexity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Vision />
      <ContactCTA />
    </>
  );
};

export default AboutUs;
