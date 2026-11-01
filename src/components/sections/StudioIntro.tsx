"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";

export function StudioIntro() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="studio"
      ref={containerRef}
      className="relative bg-[#F5F2EB] text-[#242520] py-24 sm:py-36 border-b border-[#D9D4CA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header / Label */}
        <div className="mb-12 sm:mb-16">
          <SectionLabel number="01" label="THE STUDIO" />
        </div>

        {/* Two-Column Editorial Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="gsap-reveal-title font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#242520] leading-[1.12] tracking-tight">
              We believe a space should do more than look beautiful.{" "}
              <span className="italic font-normal text-[#737B5B] block sm:inline">
                It should feel like home.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:pt-3">
            <p className="text-sm sm:text-base text-[#77766E] leading-relaxed">
              At Cozy Studio, we create thoughtful interiors that balance aesthetics with everyday
              life. From the first sketch to the finishing details, every decision is guided by how
              a space should feel, function, and evolve with the people who inhabit it.
            </p>
            <div>
              <a
                href="#philosophy"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#242520] hover:text-[#737B5B] transition-colors"
              >
                <span>Discover Our Philosophy</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform text-[#737B5B]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Asymmetrical Overlapping Image Composition */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Main Large Architectural Image */}
          <div className="gsap-reveal-image md:col-span-8 relative aspect-[16/10] overflow-hidden bg-[#E8E0D4] border border-[#D9D4CA] shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85"
              alt="Editorial architectural interior by Cozy Studio featuring raw timber, linen, and sunlight"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle caption */}
            <div className="absolute bottom-4 left-4 z-10 bg-[#F5F2EB]/90 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#77766E] border border-[#D9D4CA]">
              Architectural Living Pavilion &middot; Kochi
            </div>
          </div>

          {/* Overlapping Detail Photograph */}
          <div className="gsap-reveal-image md:col-span-4 md:-ml-12 lg:-ml-16 z-10 self-end mt-4 md:mt-0">
            <div className="relative aspect-[4/5] w-3/4 md:w-full mx-auto overflow-hidden bg-[#E8E0D4] border-2 border-[#F5F2EB] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85"
                alt="Tactile wood and fabric details"
                fill
                sizes="(max-width: 1024px) 70vw, 30vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 right-4 z-10 bg-[#242520]/80 backdrop-blur-sm text-[#F5F2EB] px-2.5 py-1 text-[9px] uppercase tracking-widest font-mono">
                Detail No. 04
              </div>
            </div>
            <div className="mt-4 text-right">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#77766E]">
                Craftsmanship & Tactile Finishes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
