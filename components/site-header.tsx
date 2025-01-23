"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/visionary-2.png"
import logo2 from "../public/images/visionarylogo.png"
import { FaXTwitter } from "react-icons/fa6";

function SiteHeader() {

  return (
    <header className="top-0 z-50  border-none rounded-full w-full mt-5">
      <nav className="container fixed z-50 left-1/2 transform -translate-x-1/2  backdrop-blur mx-auto px-4 flex items-center justify-between h-16 rounded-full border shadow-xl border-gray-800">
        <Link href={"#home"} className="hidden lg:block">
        <Image src={logo} alt="" height={190} />
        </Link>
        <Link href={"#home"} className="flex items-center lg:hidden">
        <Image src={logo2} alt="" height={50} />
        </Link>
        <div className=" md:flex space-x-4">
          <Link
            href="#features"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-slate-400 hover:text-white transition-colors"
          >
            About
          </Link>
        </div>
        <div className="items-center space-x-4 hidden md:flex">
          <Link href={"https://x.com/_visionarylabs"} target="_blank">
          <Button
            variant="outline"
            className="hidden custom_btn text-white md:inline-flex gap-2 border-slate-700 bg-[#030303] hover:bg-slate-200 hover:text-black transition-colors rounded-3xl"
          >
            <FaXTwitter size={18}/>
            <span className="text-sm">@_visionarylabs</span>
            {/* <span className="text-xs ">Follow us</span> */}
          </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;
