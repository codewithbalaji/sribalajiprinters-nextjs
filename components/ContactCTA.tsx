
import React from 'react';
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-balaji-lightblue">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Start Your Printing Project?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your printing needs and get a customized quote for your project. Our team of experts is ready to assist you.
        </p>
        <Link href="/contact" className="inline-block ">
          <button className="bg-balaji-purple hover:bg-balaji-purple/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg">
            Contact Us Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
