"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { X, ArrowRight, MapPin, Maximize2, Calendar, Compass } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (project) {
      setActiveImage(project.mainImage);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 transition-opacity duration-300"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#242520]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Container */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#F5F2EB] text-[#242520] shadow-2xl border border-[#D9D4CA] rounded-none flex flex-col"
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F5F2EB]/95 backdrop-blur-md border-b border-[#D9D4CA]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#737B5B] font-semibold">
              Project {project.number}
            </span>
            <span className="text-[#D9D4CA]">/</span>
            <span className="text-xs tracking-wider uppercase text-[#77766E] font-medium hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close project view"
            className="group flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-widest text-[#242520] hover:text-[#737B5B] transition-colors"
          >
            <span>Close</span>
            <div className="w-7 h-7 rounded-full border border-[#D9D4CA] group-hover:border-[#737B5B] flex items-center justify-center transition-colors">
              <X size={14} />
            </div>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Project Title & Overview Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D9D4CA] pb-8">
            <div className="max-w-xl">
              <h2
                id="modal-project-title"
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#242520] leading-tight font-light"
              >
                {project.name}
              </h2>
              <p className="mt-3 text-sm md:text-base text-[#77766E] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Quick Metadata */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs border-t md:border-t-0 border-[#D9D4CA] pt-4 md:pt-0">
              <div>
                <span className="block text-[#77766E] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <MapPin size={12} className="text-[#737B5B]" /> Location
                </span>
                <span className="font-medium text-[#242520]">{project.location}</span>
              </div>
              <div>
                <span className="block text-[#77766E] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Maximize2 size={12} className="text-[#737B5B]" /> Scale
                </span>
                <span className="font-medium text-[#242520]">{project.area}</span>
              </div>
              <div>
                <span className="block text-[#77766E] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Calendar size={12} className="text-[#737B5B]" /> Completion
                </span>
                <span className="font-medium text-[#242520]">{project.year}</span>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <span className="block text-[#77766E] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Compass size={12} className="text-[#737B5B]" /> Spatial Style
                </span>
                <span className="font-medium text-[#242520]">{project.style}</span>
              </div>
            </div>
          </div>

          {/* Primary Viewport Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8E0D4] border border-[#D9D4CA]">
            <Image
              src={activeImage}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover transition-opacity duration-500"
              priority
            />
          </div>

          {/* Gallery Selector */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#77766E] block font-medium">
              Architectural Perspectives ({project.gallery.length + 1})
            </span>
            <div className="grid grid-cols-4 gap-3">
              {[project.mainImage, ...project.gallery].map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                    activeImage === imgUrl
                      ? "border-[#737B5B] ring-2 ring-[#737B5B]/30"
                      : "border-[#D9D4CA] opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View perspective ${idx + 1}`}
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.name} detail view ${idx + 1}`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Concept & Highlights Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#D9D4CA]">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#737B5B] font-semibold block">
                The Design Concept
              </span>
              <p className="text-sm md:text-base text-[#242520] leading-relaxed font-light">
                {project.concept}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#737B5B] font-semibold block">
                Material & Spatial Highlights
              </span>
              <ul className="space-y-2 text-sm text-[#77766E]">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="text-[#737B5B] mt-1 text-xs">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Footer in Modal */}
          <div className="pt-6 border-t border-[#D9D4CA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#77766E] tracking-wide">
              Inspired by this aesthetic? Inquire about similar commissions.
            </p>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#242520] text-[#F5F2EB] text-xs uppercase tracking-widest hover:bg-[#737B5B] transition-colors"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

