"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SiteHeader from "../components/site-header";
import { HeroSection } from "../components/hero-section";
import FeaturesSection from "../components/features-section";
import TestimonialsSection from "../components/testimonials-section";
import CTASection from "../components/cta-section";
import SiteFooter from "../components/site-footer";
import OurMethodSection from "../components/our-method";
import PricingSection from "../components/pricing-section";

const AnimatedBackground = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0px 0px", "-200px -200px"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.6) 1px, transparent 0)`,
          backgroundSize: "100px 100px",
        }}
        animate={controls}
      />
    </>
  );
};

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden body-container max-w-[1600px] overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10 ">
        <SiteHeader />
        <main>
          <HeroSection />
          <FeaturesSection />
          <OurMethodSection />
          <PricingSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
