"use client";
import React, { useState } from "react";
import { servicesData } from "@/data/servicesData";
import Image from "next/image";

const Gallery = () => {
  const [category, setCategory] = useState<string>("digital-printing");

  const currentServices = servicesData.find((cat) => cat.id === category)?.services || [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Gallery</h2>
          <p className="text-gray-600">Explore our wide range of printing services</p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {servicesData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                category === cat.id
                  ? "bg-balaji-purple text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
