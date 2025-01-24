"use client";

import Image from "next/image";
import React from "react";
import aboutImg from "../public/images/aboutsection.png";
import { Button } from "./ui/button";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import { GrYoutube } from "react-icons/gr";

function TestimonialsSection() {
  return (
    <section id="about" className="py-20 sm:py-22 bg-[#030303]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-10 lg:gap-20 ">
          <Image src={aboutImg} height={400} alt="" />
          <div className="">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white pb-5">
              Hola!
            </h1>
            <div>
              I’m Rohan, the founder of <strong>VisionaryLabs</strong>. I’m a full-stack
              developer with years of experience building user-friendly websites
              and applications. I’ve worked on a wide range of
              projects, helping businesses create modern, fast, and scalable
              solutions. 
              <br/> <br/>
              My goal is to understand your needs and use my skills
              to deliver the best possible results for your business. Whether
              it’s designing a sleek interface or developing a powerful backend,
              I’m here to help turn your ideas into reality and ensure your
              success.
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-4 my-5 flex-wrap">
              <h1 className="font-bold">Connect with me:</h1>
              <Link href={"https://www.youtube.com/@rcode34"} target="_blank">
                <Button
                  variant="outline"
                  className="custom_btn text-white md:inline-flex gap-2 border-slate-700 bg-[#030303] hover:bg-slate-200 hover:text-black transition-colors rounded-3xl py-6"
                >
                  <GrYoutube size={36} color="red" />
                  <span className="text-lg">@rcode34</span>
                  {/* <span className="text-xs ">Follow us</span> */}
                </Button>
              </Link>
              <Link href={"https://x.com/heyrohan7"} target="_blank">
                <Button
                  variant="outline"
                  className="custom_btn text-white md:inline-flex gap-2 border-slate-700 bg-[#030303] hover:bg-slate-200 hover:text-black transition-colors rounded-3xl py-6"
                >
                  <FaXTwitter size={34} />
                  <span className="text-lg">@heyrohan7</span>
                  {/* <span className="text-xs ">Follow us</span> */}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
