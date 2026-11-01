"use client";

import React, { useState } from "react";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ScrollAnimations } from "@/components/ui/ScrollAnimations";
import { Preloader } from "@/components/ui/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StudioIntro } from "@/components/sections/StudioIntro";
import { Philosophy } from "@/components/sections/Philosophy";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  return (
    <SmoothScroll>
      {/* GSAP & ScrollTrigger Animation Engine */}
      <ScrollAnimations />

      {/* Cinematic Opening Preloader */}
      <Preloader onComplete={() => setIsPreloaderComplete(true)} />

      <main className="relative min-h-screen bg-[#F5F2EB] text-[#242520] selection:bg-[#737B5B] selection:text-[#F5F2EB]">
        {/* Navigation Bar */}
        <Navbar />

        {/* 1. Immersive Hero */}
        <Hero isLoaded={isPreloaderComplete} />

        {/* 2. Studio Introduction */}
        <StudioIntro />

        {/* 3. Design Philosophy — Moment of Visual Pause */}
        <Philosophy />

        {/* 4. Selected Works — Immersive Portfolio & Modal */}
        <SelectedWorks />

        {/* 5. Services — Interactive List & Scope */}
        <Services />

        {/* 6. Process — From Idea to Interior */}
        <Process />

        {/* 7. The People — Architectural Team */}
        <Team />

        {/* 8. Client Testimonials */}
        <Testimonials />

        {/* 9. Contact & Project Inquiry */}
        <Contact />

        {/* 10. Architectural Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
