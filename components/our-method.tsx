"use client";

import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaClipboardList, FaLifeRing, FaRocket } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';

function OurMethodSection() {
  return (
    <section className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
        Our Approach
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <FaPhoneAlt className="h-16 w-16 text-purple-500" />,
            title: "Initial Consultation",
            description:
              "Start with a free call to share your vision. We’ll discuss your idea, goals, and business needs to ensure we’re aligned from the start.",
          },
          {
            icon: <FaClipboardList className="h-16 w-16 text-purple-500" />,
            title: "MVP Planning & Roadmap",
            description:
              "We create a detailed MVP plan and a clear technical roadmap so you know exactly what we’ll build and how we’ll build it.",
          },
          {
            icon: <FiClock className="h-16 w-16 text-purple-500" />,
            title: "Development Sprint",
            description:
              "Once everything is approved, we’ll start building your MVP and deliver updates along the way. Your product will be ready in just 5 weeks.",
          },
        
        ].map((feature, index) => (
          <div
            key={index}
            className="container rounded-lg shadow-lg p-6">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-400">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {[
             {
              icon: <FaRocket className="h-16 w-16 text-purple-500" />,
              title: "MVP Launch",
              description:
                "Receive your fully functional MVP with all planned features, perfectly crafted for a smooth market launch and user engagement.",
            },
        
          {
            icon: <FaLifeRing className="h-16 w-16 text-purple-500" />,
            title: "Ongoing Support",
            description:
              "Get 4 weeks of free maintenance, including bug fixes and essential updates, so your MVP runs smoothly post-launch.",
          }
        
        
        ].map((feature, index) => (
          <div
            key={index}
            className="container rounded-lg shadow-lg p-6"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default OurMethodSection