"use client";

import { Code, Zap } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";


function PricingSection() {


  const [firstSocialEnable, setFirstSocialEnable] = useState(false);
  const [secondSocialEnable, setSecondSocialEnable] = useState(false);

  const features = [
    {
      icon: <Code className="h-8 w-8 text-sky-500" />,
      title: "Development Package",
      price1: "2599",
      price2: "3499",
      type: "One Time",
      socialChecked: firstSocialEnable,
      message: "4 spots left for January.",
      description: [
        "MVP ready in 4 weeks.",
        "Custom web application with scalable tech.",
        "30 days of complete maintenance",
        "Seamless payment/auth integrations.",
        "Transparent progress tracking and timely updates",
        "Founder-led personalized service.",
        "Engaging Instagram+X posts, starting from 2nd week.",
        "Upto 20+ reels, 45+ tweets target in the first month",
        "Monitor comments and messages, with responses.",
        "Optimize bios, links, and visuals for better branding."
      ],
    },
    {
      icon: <Zap className="h-8 w-8 text-sky-500" />,
      title: "Monthly Service Package",
      price1: "2899/mo",
      price2: "3799/mo",
      type: "Monthly Subscription",
      socialChecked: secondSocialEnable,
      message: "No obligations, cancel anytime.",
      description: [
        "Routine web app updates, performance, and security checks.",
        "Instant feature enhancements and bug fixes.",
        "Priority support with a dedicated contact.",
        "Scalable upgrades based on business needs.",
        "Founder-led personalized service.",
        "Transparent updates throughout.",
        "Upto 20+ reels, 45+ tweets target in the every month",
        "Monthly social media content creation scheduling.",
        "Monitoring and responding to comments and messages."
      ],
    },
  ];
  

  return (
    <section id="pricing" className="py-5 lg:py-20 pb-20 bg-transparent rounded-3xl">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl  sm:text-4xl font-extrabold text-center mb-2">
          Transparent Pricing for Every Stage
        </h2>
        <p className="text-slate-400 text-center mb-8">
          Flexible plans tailored to your business needs. Get exactly what you
          need to launch your MVP and scale with confidence.
        </p>
        <div className=" p-4 sm:p-8 lg:p-12 white_box">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:px-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between gap-5 container rounded-lg shadow-lg p-6 ${
                  index === 0 ? "bg-white" : "bg-[#090909]"
                }`}>
                <div>
                  <div className="flex lg:flex-row flex-col lg:items-center mb-4 justify-between gap-2">
                    <div
                      className={`text-3xl font-bold ${
                        index === 0 ? "text-black" : "text-white"
                      } mb-3`}
                    >
                      {feature.title}
                    </div>
                    <div>
                      <label className="toggle">
                        <span className={`toggle-label pr-2 text-xs font-bold ${
                        index === 0 ? "text-black" : "text-white"
                      }`}>
                          Enable Social Suite
                        </span>
                        <input
                          className="toggle-checkbox"
                          type="checkbox"
                          checked={feature.title === "Development Package" ? firstSocialEnable : secondSocialEnable}
                          onChange={() => feature.title === "Development Package" ? setFirstSocialEnable(!firstSocialEnable) : setSecondSocialEnable(!secondSocialEnable)}
                        />
                        <div className="toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    className={`mb-4 py-1 px-3 font-bold rounded-full text-white bg-slate-800 w-fit text-sm`}
                  >
                    {feature.type}
                  </div>
                  <div
                    className={`text-4xl font-bold ${
                      index === 0 ? "text-black" : "text-white"
                    }`}
                  >
                    Starting Price: ${
                    feature.socialChecked ? feature.price2 : feature.price1
                    }
                  </div>
                  <div
                    className={`mb-4 text-sm font-bold ${
                      index === 0 ? "text-red-400" : "text-gray-400"
                    }`}
                  >
                    {feature.message}
                  </div>
                  <h3
                    className={`text-xl font-semibold ${
                      index === 0 ? "text-black" : "text-white"
                    } mb-2`}
                  >
                    What&apos;s in it:
                  </h3>
                  <div className="text-slate-400">
                    {feature.description.slice(0,5).map((val: string) => {
                      return (
                        <p className="py-1" key={val}>
                          ✅ {val}
                        </p>
                      );
                    })}
                    {
                      feature.title === "Development Package" && feature.socialChecked && feature.description.slice(6,9).map((val: string) => {
                        return (
                          <p className="py-1" key={val}>
                            ✅ {val}
                          </p>
                        );
                      })
                    }
                     {
                      feature.title === "Monthly Service Package" && feature.socialChecked && feature.description.slice(6,9).map((val: string) => {
                        return (
                          <p className="py-1" key={val}>
                            ✅ {val}
                          </p>
                        );
                      })
                    }
                  </div>
                </div>
                <Link target="_blank" href={"https://cal.com/rohan-uqvxp0/30min"}>
                <button
                  className={`custom_btn text-2xl font-bold w-full  ${
                    index === 0 ? "bg-black " : "bg-slate-800"
                  } p-3`}
                >
                  Book a call
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
