import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function CTASection() {
  return (
    <section className="py-20 sm:py-32 mb-10 px-4">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
        Get started on launching your idea. Let&apos;s connect to understand your vision and scale your product to new heights!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">

        <Link target="_blank" href={"https://cal.com/rohan-uqvxp0/30min"}>
          <Button className="bg-no-repeat bg-gradient-to-r from-violet-500  via-purple-600 to-pink-500 hover:bg-sky-400 text-white font-semibold h-12 px-8 rounded-lg transition-colors">
            Book your slots now
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
