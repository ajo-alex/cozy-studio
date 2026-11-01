"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionLabel } from "../ui/SectionLabel";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const active = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative bg-[#E8E0D4] text-[#242520] py-24 sm:py-36 border-b border-[#D9D4CA] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 sm:mb-24">
          <SectionLabel number="WORDS" label="CLIENT REFLECTIONS" />
          <span className="text-[10px] tracking-widest uppercase text-[#77766E] font-mono">
            Demo Client Reflections
          </span>
        </div>

        {/* Prominent Quote Showcase */}
        <div className="relative min-h-[320px] flex flex-col justify-between">
          <div className="space-y-8">
            <Quote size={40} className="text-[#737B5B] opacity-50" />
            <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#242520] leading-[1.25] tracking-tight transition-opacity duration-300">
              &ldquo;{active.quote}&rdquo;
            </blockquote>
          </div>

          {/* Attribution & Carousel Controls */}
          <div className="pt-12 sm:pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[#D9D4CA]">
            <div className="flex items-center gap-4">
              {active.image && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D9D4CA]">
                  <Image
                    src={active.image}
                    alt={active.author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h4 className="font-serif text-lg text-[#242520] font-medium">
                  {active.author}
                </h4>
                <p className="text-xs uppercase tracking-wider text-[#77766E]">
                  {active.role} &mdash;{" "}
                  <span className="text-[#737B5B]">{active.project}</span> ({active.location})
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#77766E] tracking-widest mr-2">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
              <button
                onClick={prev}
                aria-label="Previous client testimonial"
                className="w-10 h-10 rounded-full border border-[#D9D4CA] hover:border-[#737B5B] hover:text-[#737B5B] flex items-center justify-center transition-colors text-[#242520]"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next client testimonial"
                className="w-10 h-10 rounded-full border border-[#D9D4CA] hover:border-[#737B5B] hover:text-[#737B5B] flex items-center justify-center transition-colors text-[#242520]"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

