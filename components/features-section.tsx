"use client";

import React from "react";
import { AiOutlineAppstoreAdd, AiOutlineFileImage } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import {  FaPlug } from "react-icons/fa6";
import { GiTechnoHeart } from "react-icons/gi";

const features = [
  {
    icon: <AiOutlineAppstoreAdd className="h-16 w-16 text-purple-500"  />,
    title: "All-in-One Solution",
    description:
      "Your product includes a sleek web app, a high-converting landing page, and SEO-optimized content, designed for fast launches and effortless scaling.",
  },
  {
    icon: <FaPlug className="h-16 w-16 text-purple-500"  />,
    title: "Effortless Integrations",
    description:
      "We handle all the necessary integrations—payment gateways, user authentication, and email marketing platforms—so you can focus on growth.",
  },
  {
    icon: <GiTechnoHeart className="h-16 w-16 text-purple-500"  />,
    title: "Scalable Technology",
    description:
      "Built with the latest technologies and AI, we ensure your MVP is fast, stable, and ready to scale.",
  },
  {
    icon: <AiOutlineFileImage className="h-16 w-16 text-purple-500"  />,
    title: "Advertising-Ready Content Creation",
    description:
      "Our experts craft compelling ad copy, high-quality visuals, and targeted marketing materials to help you effectively promote your product and connect with your audience across multiple platforms",
  },
  {
    icon: <FaTools className="h-16 w-16 text-purple-500"  />,
    title: "Ongoing Support & Maintenance",
    description:
      "Beyond launch, we provide continuous support and maintenance, ensuring your product stays updated, secure, and running smoothly as you scale.",
  },
]

function FeaturesSection() {
  return (
    <section id="features" className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Everything you need to build your vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0,3).map((feature, index) => (
            <div key={index} className="container rounded-lg shadow-lg p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-8">
       {features.slice(3,5).map((feature, index) => (
            <div key={index} className="container rounded-lg shadow-lg p-6">
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
  );
}

export default FeaturesSection;
