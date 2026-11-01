"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { SectionLabel } from "../ui/SectionLabel";

export function Services() {
  const [expandedId, setExpandedId] = useState<string | null>("residential-interiors");
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="relative bg-[#F5F2EB] text-[#242520] py-24 sm:py-36 border-b border-[#D9D4CA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 sm:mb-28">
          <div className="space-y-4 max-w-2xl">
            <SectionLabel number="03" label="OUR SERVICES" />
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#242520] tracking-tight leading-[1.08]">
              Thoughtful design. <br />
              <span className="italic font-normal text-[#737B5B]">From concept to completion.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#77766E] max-w-sm leading-relaxed pb-2">
            A comprehensive architectural and styling service that transforms initial aspirations
            into enduring, livable environments.
          </p>
        </div>

        {/* Interactive Services List with Expanding Accordions */}
        <div className="border-t border-[#D9D4CA]">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredImage(service.previewImage)}
                className={`border-b border-[#D9D4CA] transition-colors duration-300 ${
                  isExpanded ? "bg-[#E8E0D4]/30" : "hover:bg-[#E8E0D4]/15"
                }`}
              >
                <button
                  onClick={() => toggleExpand(service.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left py-7 sm:py-9 flex flex-col md:flex-row md:items-center justify-between gap-6 group focus:outline-none"
                >
                  {/* Left: Number & Title */}
                  <div className="flex items-baseline gap-4 sm:gap-8 md:w-5/12">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#737B5B] font-semibold">
                      {service.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#242520] group-hover:text-[#737B5B] group-hover:translate-x-1 transition-all duration-300 font-light">
                      {service.title}
                    </h3>
                  </div>

                  {/* Middle: Short Description */}
                  <div className="md:w-5/12">
                    <p className="text-xs sm:text-sm text-[#77766E] leading-relaxed max-w-lg">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Right: Plus / Minus Toggle Button */}
                  <div className="flex items-center justify-between md:justify-end gap-3 md:w-2/12 pt-2 md:pt-0">
                    <span className="text-[11px] uppercase tracking-widest text-[#77766E] md:hidden">
                      {isExpanded ? "Collapse" : "Explore"}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-[#D9D4CA] group-hover:border-[#737B5B] flex items-center justify-center text-[#242520] group-hover:text-[#737B5B] transition-colors">
                      {isExpanded ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </div>
                </button>

                {/* Expanded Drawer */}
                {isExpanded && (
                  <div className="pb-10 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-[#D9D4CA]/50 animate-fadeIn">
                    {/* Visual Preview */}
                    <div className="md:col-span-5 relative aspect-[16/10] overflow-hidden bg-[#E8E0D4] border border-[#D9D4CA]">
                      <Image
                        src={service.previewImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Details & Deliverables */}
                    <div className="md:col-span-7 space-y-6">
                      <p className="text-sm sm:text-base text-[#242520] leading-relaxed font-light">
                        {service.fullDescription}
                      </p>

                      <div className="space-y-3 pt-2">
                        <span className="text-xs uppercase tracking-widest text-[#737B5B] font-semibold block">
                          Scope & Key Deliverables
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 text-xs text-[#77766E]">
                              <CheckCircle2 size={13} className="text-[#737B5B] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#242520] hover:text-[#737B5B] font-medium transition-colors"
                        >
                          <span>Commission {service.title}</span>
                          <ArrowUpRight size={13} className="text-[#737B5B]" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

