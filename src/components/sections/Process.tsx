"use client";

import React from "react";
import Image from "next/image";
import { processSteps } from "@/data/process";
import { SectionLabel } from "../ui/SectionLabel";

export function Process() {
  return (
    <section
      id="process"
      className="relative bg-[#F5F2EB] text-[#242520] py-24 sm:py-36 border-b border-[#D9D4CA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 sm:mb-28">
          <div className="space-y-4 max-w-2xl">
            <SectionLabel number="04" label="HOW WE WORK" />
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#242520] tracking-tight leading-[1.08]">
              From the first conversation <br />
              <span className="italic font-normal text-[#737B5B]">to the final detail.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#77766E] max-w-sm leading-relaxed pb-2">
            A disciplined, four-stage spatial journey structured around transparency, artisan craft,
            and meticulous coordination.
          </p>
        </div>

        {/* Four-Stage Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle horizontal connecting bar on large screens */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#D9D4CA] z-0" />

          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col justify-between group space-y-6 bg-[#F5F2EB] p-4 -m-4 border border-transparent hover:border-[#D9D4CA] transition-all duration-300"
            >
              {/* Header with Step Circle */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-[#E8E0D4] border border-[#D9D4CA] group-hover:border-[#737B5B] flex items-center justify-center font-mono text-xs font-semibold text-[#242520] group-hover:text-[#737B5B] transition-colors">
                  {step.number}
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#737B5B] font-semibold">
                  Stage {step.stage}
                </span>
              </div>

              {/* Accent Image Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8E0D4] border border-[#D9D4CA]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Step Copy */}
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-[#242520] group-hover:text-[#737B5B] transition-colors font-light">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-[#242520]/90">
                  {step.description}
                </p>
                <p className="text-xs text-[#77766E] leading-relaxed font-light pt-2">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

