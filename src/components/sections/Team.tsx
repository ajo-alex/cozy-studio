"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { teamMembers } from "@/data/team";
import { SectionLabel } from "../ui/SectionLabel";

export function Team() {
  return (
    <section
      id="team"
      className="relative bg-[#F5F2EB] text-[#242520] py-24 sm:py-36 border-b border-[#D9D4CA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 sm:mb-28">
          <div className="space-y-4 max-w-2xl">
            <SectionLabel number="05" label="THE PEOPLE" />
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#242520] tracking-tight leading-[1.08]">
              Good spaces begin <br />
              <span className="italic font-normal text-[#737B5B]">with good people.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#77766E] max-w-sm leading-relaxed pb-2">
            A thoughtful team, a shared vision, and an obsession with the details. Meet the minds
            curating your spatial narrative.
          </p>
        </div>

        {/* Editorial Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group space-y-5"
            >
              {/* Rectangular Editorial Portrait */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E8E0D4] border border-[#D9D4CA]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[25%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242520]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-[11px] text-[#F5F2EB] uppercase tracking-widest font-mono">
                    {member.focus}
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-[#242520] group-hover:text-[#737B5B] transition-colors font-light">
                    {member.name}
                  </h3>
                  <a
                    href={member.social}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Connect with ${member.name}`}
                    className="w-6 h-6 rounded-full border border-[#D9D4CA] flex items-center justify-center text-[#77766E] hover:text-[#737B5B] hover:border-[#737B5B] transition-colors"
                  >
                    <ArrowUpRight size={12} />
                  </a>
                </div>

                <p className="text-xs uppercase tracking-widest text-[#737B5B] font-medium">
                  {member.role}
                </p>

                <p className="text-xs text-[#77766E] leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

