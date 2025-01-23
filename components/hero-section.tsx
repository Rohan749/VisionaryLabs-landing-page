import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      <div id="home" className="mt-0 flex flex-col justify-center gap-4 max-h-[60rem] h-[100vh]">
        <h2 className="text-4xl relative w-[80%] mx-auto z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
       <div>Transform Ideas Into</div> 
          <div className="relative mx-auto inline-block lg:w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className=" relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 pb-3">
             Stunning Digital Solutions.
            </div>
          </div>
        </h2>
          <Link className="flex flex-col sm:flex-row justify-center gap-4 w-fit mx-auto py-2" href={"https://cal.com/rohan-uqvxp0/30min"} target="_blank">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-16 py-5 text-sm font-medium text-white backdrop-blur-3xl">
              Get Started
            </span>
          </button>
          </Link>
        <p className="text-slate-400 text-center">
        We craft stunning digital experiences that drive results. <br/> Let’s transform your ideas into reality with cutting-edge design and technology.
        </p>
      </div>
    </>
  );
}
