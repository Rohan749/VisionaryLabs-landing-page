import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

function SiteFooter() {
  return (
    <footer className=" bg-[#030303] py-3">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-slate-800 flex flex-col md:flex-row justify-between items-center ">
          <p className="text-sm text-slate-400 pl-0 ml-0 lg:pl-2 lg:ml-20">
            © 2024 VisionaryLabs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 pr-0 mr-0 lg:pr-2 lg:mr-20">
            <Link
              href={"https://x.com/_visionarylabs"}
              target="_blank"
              className="text-slate-400 hover:text-white transition-colors flex gap-1 items-center"
            >
              <FaXTwitter />
              <span className="text-xs">@_visionarylabs</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
