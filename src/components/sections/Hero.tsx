"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { gsap } from "@/animations/gsap";

interface HeroProps {
  isLoaded?: boolean;
}

export function Hero({ isLoaded = true }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLButtonElement>(null);

  // Parallax on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!imageContainerRef.current) return;
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight * 1.5) {
        imageContainerRef.current.style.transform = `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.12}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Multi-stage entrance animation when Preloader finishes
  useEffect(() => {
    if (!isLoaded) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Image subtle zoom-out reveal
      if (imageContainerRef.current) {
        tl.fromTo(
          imageContainerRef.current,
          { scale: 1.15, filter: "brightness(0.6)" },
          { scale: 1.05, filter: "brightness(0.82)", duration: 1.8, ease: "power2.out" },
          0
        );
      }

      // Master headline upward reveal
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          0.3
        );
      }

      // Supporting copy
      if (copyRef.current) {
        tl.fromTo(
          copyRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          0.6
        );
      }

      // CTAs
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
          0.8
        );
      }

      // Scroll indicator
      if (indicatorRef.current) {
        tl.fromTo(
          indicatorRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#242520] text-[#F5F2EB]"
    >
      {/* Background Architectural Photography with Parallax & Soft Overlay */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 z-0 w-full h-full will-change-transform transition-transform duration-300 ease-out"
      >
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"
          alt="Warm minimalist contemporary interior with sculptural furniture and natural light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 filter brightness-[0.82] contrast-[0.98]"
        />
        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#242520] via-transparent to-[#242520]/40 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#242520]/60 via-transparent to-transparent" />
      </div>

      {/* Top Margin Spacer (Accounts for sticky navbar) */}
      <div className="pt-28 sm:pt-36 relative z-10 px-6 sm:px-10 max-w-7xl mx-auto w-full flex justify-between items-center text-xs tracking-[0.25em] uppercase text-[#F5F2EB]/70">
        <span className="hidden sm:inline">Selected Architecture &bull; 2024</span>
        <span className="text-[#E8E0D4] font-medium tracking-[0.3em]">
          INTERIOR DESIGN &middot; SPATIAL DESIGN &middot; STYLING
        </span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto py-12">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Tagline / Subtitle */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#737B5B]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#E8E0D4] font-light">
              Cozy Studio Portfolio
            </span>
          </div>

          {/* Master Headline */}
          <h1
            ref={headlineRef}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-light text-[#F5F2EB] leading-[1.05] tracking-tight"
          >
            Make room for <br />
            <span className="italic font-normal text-[#E8E0D4]">better living.</span>
          </h1>

          {/* Supporting Copy */}
          <p
            ref={copyRef}
            className="text-base sm:text-xl text-[#F5F2EB]/85 font-light max-w-2xl leading-relaxed"
          >
            Interiors shaped around the way you live, the things you love, and the moments that
            matter. Thoughtful layouts, refined materials, and natural daylight.
          </p>

          {/* Action CTAs */}
          <div ref={ctaRef} className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            <MagneticButton
              onClick={scrollToWork}
              className="px-7 py-3.5 bg-[#F5F2EB] text-[#242520] hover:bg-[#737B5B] hover:text-[#F5F2EB] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-lg group flex items-center gap-2"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </MagneticButton>

            <button
              onClick={scrollToContact}
              className="px-6 py-3.5 border border-[#F5F2EB]/30 hover:border-[#F5F2EB] text-[#F5F2EB] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 backdrop-blur-sm"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Coordinates & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-8 sm:pb-12 w-full flex items-end justify-between text-xs text-[#F5F2EB]/70 border-t border-[#F5F2EB]/15 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 font-light tracking-widest uppercase">
          <span>Kochi &bull; Bangalore</span>
          <span className="hidden sm:inline text-[#737B5B]">&bull;</span>
          <span>Spatial Harmony & Craft</span>
        </div>

        <button
          ref={indicatorRef}
          onClick={scrollToWork}
          aria-label="Scroll down to studio introduction"
          className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#F5F2EB]/80 hover:text-[#F5F2EB] transition-colors"
        >
          <span className="hidden sm:inline">Scroll to Explore</span>
          <div className="w-8 h-8 rounded-full border border-[#F5F2EB]/30 group-hover:border-[#F5F2EB] flex items-center justify-center transition-colors">
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
}
