"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Plus, MapPin } from "lucide-react";
import { Project, projects } from "@/data/projects";
import { SectionLabel } from "../ui/SectionLabel";
import { ProjectModal } from "../ui/ProjectModal";

export function SelectedWorks() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (proj: Project) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const p1 = projects[0]; // The Olive Residence
  const p2 = projects[1]; // The Quiet House
  const p3 = projects[2]; // Casa Verde
  const p4 = projects[3]; // The Sunday Studio

  return (
    <>
      <section
        id="work"
        className="relative bg-[#F5F2EB] text-[#242520] py-24 sm:py-36 border-b border-[#D9D4CA] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 sm:mb-28">
            <div className="space-y-4 max-w-2xl">
              <SectionLabel number="02" label="SELECTED WORKS" />
              <h2 className="gsap-reveal-title font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#242520] tracking-tight leading-[1.08]">
                Spaces we&apos;ve <br />
                <span className="italic font-normal text-[#737B5B]">brought to life.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#77766E] max-w-sm leading-relaxed pb-2">
              A collection of considered spaces, personal stories, and thoughtful details shaped
              across private residences and commercial ateliers.
            </p>
          </div>

          {/* Editorial Portfolio Showcase — Varied Scales & Asymmetry */}
          <div className="space-y-24 sm:space-y-36">
            {/* Project 01: The Olive Residence — Expansive Heroic Spread */}
            <div
              onClick={() => handleOpenModal(p1)}
              className="gsap-reveal-image group cursor-pointer block space-y-6"
            >
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#E8E0D4] border border-[#D9D4CA]">
                <Image
                  src={p1.mainImage}
                  alt={p1.name}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#242520]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-[#F5F2EB]/90 backdrop-blur-md border border-[#D9D4CA] flex items-center justify-center text-[#242520] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={20} />
                </div>
                <div className="absolute bottom-6 left-6 z-10 hidden sm:flex items-center gap-2 bg-[#242520]/80 backdrop-blur-sm text-[#F5F2EB] px-3.5 py-1.5 text-xs uppercase tracking-wider">
                  <Plus size={12} />
                  <span>View Project Case Study</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#737B5B] font-medium">
                    <span>{p1.number}</span>
                    <span>&bull;</span>
                    <span>{p1.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#242520] group-hover:text-[#737B5B] transition-colors font-light">
                    {p1.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#77766E] uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-[#737B5B]" /> {p1.location}
                  </span>
                  <span>&bull;</span>
                  <span>{p1.style}</span>
                </div>
              </div>
            </div>

            {/* Asymmetrical Pair: Project 02 (Portrait) & Project 03 (Landscape Offset) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Project 02: The Quiet House — Tall Portrait */}
              <div
                onClick={() => handleOpenModal(p2)}
                className="gsap-reveal-image lg:col-span-6 group cursor-pointer space-y-6"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E8E0D4] border border-[#D9D4CA]">
                  <Image
                    src={p2.mainImage}
                    alt={p2.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#242520]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-[#F5F2EB]/90 backdrop-blur-md border border-[#D9D4CA] flex items-center justify-center text-[#242520] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#737B5B] font-medium">
                    <span>{p2.number}</span>
                    <span>&bull;</span>
                    <span>{p2.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#242520] group-hover:text-[#737B5B] transition-colors font-light">
                    {p2.name}
                  </h3>
                  <p className="text-xs text-[#77766E] uppercase tracking-wider pt-1 flex items-center gap-1">
                    <MapPin size={12} className="text-[#737B5B]" /> {p2.location} &mdash; {p2.style}
                  </p>
                </div>
              </div>

              {/* Project 03: Casa Verde — Offset Composition */}
              <div
                onClick={() => handleOpenModal(p3)}
                className="gsap-reveal-image lg:col-span-6 group cursor-pointer space-y-6 lg:pt-16"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E8E0D4] border border-[#D9D4CA]">
                  <Image
                    src={p3.mainImage}
                    alt={p3.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#242520]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-[#F5F2EB]/90 backdrop-blur-md border border-[#D9D4CA] flex items-center justify-center text-[#242520] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#737B5B] font-medium">
                    <span>{p3.number}</span>
                    <span>&bull;</span>
                    <span>{p3.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#242520] group-hover:text-[#737B5B] transition-colors font-light">
                    {p3.name}
                  </h3>
                  <p className="text-xs text-[#77766E] uppercase tracking-wider pt-1 flex items-center gap-1">
                    <MapPin size={12} className="text-[#737B5B]" /> {p3.location} &mdash; {p3.style}
                  </p>
                </div>
              </div>
            </div>

            {/* Project 04: The Sunday Studio — Wide Editorial Split */}
            <div
              onClick={() => handleOpenModal(p4)}
              className="gsap-reveal-image group cursor-pointer block space-y-6"
            >
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#E8E0D4] border border-[#D9D4CA]">
                <Image
                  src={p4.mainImage}
                  alt={p4.name}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#242520]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-[#F5F2EB]/90 backdrop-blur-md border border-[#D9D4CA] flex items-center justify-center text-[#242520] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
                <div className="absolute bottom-6 left-6 z-10 hidden sm:flex items-center gap-2 bg-[#242520]/80 backdrop-blur-sm text-[#F5F2EB] px-3.5 py-1.5 text-xs uppercase tracking-wider">
                  <Plus size={12} />
                  <span>View Project Case Study</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#737B5B] font-medium">
                    <span>{p4.number}</span>
                    <span>&bull;</span>
                    <span>{p4.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#242520] group-hover:text-[#737B5B] transition-colors font-light">
                    {p4.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#77766E] uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-[#737B5B]" /> {p4.location}
                  </span>
                  <span>&bull;</span>
                  <span>{p4.style}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
