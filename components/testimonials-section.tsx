"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import aboutImg from "../public/images/aboutsection.png";

function TestimonialsSection() {
  return (
    <section id="about" className="py-20 sm:py-22 bg-[#030303]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-10 lg:gap-20 ">
          <Image src={aboutImg} height={400} alt="" />
          <div className="">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white pb-5">
              Meet the Dev
            </h1>
            <div>
              Hi, I’m Rohan, the founder of VisionaryLabs. I’m a full-stack
              developer with years of experience building user-friendly websites
              and applications. Over time, I’ve worked on a wide range of
              projects, helping businesses create modern, fast, and scalable
              solutions. My goal is to understand your needs and use my skills
              to deliver the best possible results for your business. Whether
              it’s designing a sleek interface or developing a powerful backend,
              I’m here to help turn your ideas into reality and ensure your
              success.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
