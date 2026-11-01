"use client";

import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { Sparkles, Sun, Heart } from "lucide-react";

export function Philosophy() {
  const principles = [
    {
      number: "01",
      title: "Considered Details",
      description: "Every material, finish, and object has a purpose.",
      details:
        "We reject arbitrary decoration in favor of thoughtful utility and tactile honesty. Each shadow line, timber joint, and edge radius is carefully considered.",
      icon: Sparkles,
    },
    {
      number: "02",
      title: "Natural Harmony",
      description: "Textures, light, and materials work together effortlessly.",
      details:
        "Spaces tuned to diurnal light rhythms, gentle acoustic absorption, and authentic materials that bring the serenity of nature into the domestic sphere.",
    icon: Sun,
    },
    {
      number: "03",
      title: "Personal by Design",
      description: "Every space reflects the people who call it home.",
      details:
        "No two lives are alike. We design with deep empathy for your personal rituals, collections, and quiet hours, crafting homes that feel uniquely yours.",
      icon: Heart,
    },
  ];

  return (
    <section
      id="philosophy"
      className="relative bg-[#292D26] text-[#F5F2EB] py-28 sm:py-40 border-y border-[#F5F2EB]/15 overflow-hidden"
    >
      {/* Background Architectural Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#F5F2EB_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Label */}
        <div className="mb-14 sm:mb-20">
          <SectionLabel number="PHILOSOPHY" label="THE FOUNDATION" theme="dark" />
        </div>

        {/* Monumental Headline — Visual Pause */}
        <div className="max-w-4xl mb-24 sm:mb-32">
          <h2 className="gsap-reveal-title font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.08] tracking-tight">
            Good design is not just seen. <br />
            <span className="italic font-normal text-[#E8E0D4]">It&apos;s felt.</span>
          </h2>
          <p className="mt-8 text-base sm:text-lg text-[#E8E0D4]/70 max-w-xl font-light leading-relaxed">
            We perceive a space with all our senses — the acoustics underfoot, the cool touch of honed
            stone, the scent of seasoned wood, and the warmth of midday sunlight.
          </p>
        </div>

        {/* Three Short Principles Grid */}
        <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-12 border-t border-[#F5F2EB]/15">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="gsap-stagger-item group space-y-5 p-6 -m-6 rounded-none hover:bg-[#F5F2EB]/[0.03] transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-[#737B5B] uppercase font-semibold">
                    {item.number} &mdash; PRINCIPLE
                  </span>
                  <Icon size={16} className="text-[#737B5B] opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F5F2EB] group-hover:text-[#E8E0D4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-[#E8E0D4]/90">
                    {item.description}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#E8E0D4]/60 leading-relaxed font-light pt-2">
                  {item.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
