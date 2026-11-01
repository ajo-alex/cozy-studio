"use client";

import React from "react";
import { ArrowUp, Globe, Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon, PinterestIcon } from "../ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#F5F2EB] text-[#242520] border-t border-[#D9D4CA] pt-20 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Large Typographic Closing Statement */}
        <div className="mb-20 sm:mb-28">
          <span className="text-xs uppercase tracking-[0.25em] text-[#737B5B] font-semibold block mb-4">
            A Thoughtful Ending
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#242520] tracking-tight leading-[1.05]">
            Come home to <br />
            <span className="italic font-normal text-[#737B5B]">something beautiful.</span>
          </h2>
        </div>

        {/* Multi-column Architectural Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-16 border-b border-[#D9D4CA]">
          {/* Brand Intro Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase font-light text-[#242520]">
                Cozy Studio
              </span>
              <p className="text-xs tracking-[0.25em] uppercase text-[#77766E]">
                Interior & Spatial Architecture
              </p>
            </div>
            <p className="text-sm text-[#77766E] max-w-sm leading-relaxed">
              Thoughtfully designed spaces that feel as beautiful as they look. We create
              meaningful residential and commercial environments shaped around light, materiality,
              and everyday rituals.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs tracking-widest uppercase text-[#737B5B]">
              <span>Kochi</span>
              <span>&bull;</span>
              <span>Bangalore</span>
              <span>&bull;</span>
              <span>Trivandrum</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#242520] block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.15em] text-[#77766E]">
              <li>
                <a href="#studio" className="hover:text-[#737B5B] transition-colors">
                  01 / The Studio
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#737B5B] transition-colors">
                  02 / Philosophy
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#737B5B] transition-colors">
                  03 / Selected Works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#737B5B] transition-colors">
                  04 / Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#737B5B] transition-colors">
                  05 / How We Work
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#737B5B] transition-colors">
                  06 / The Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#737B5B] transition-colors">
                  07 / Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#242520] block">
              Direct Contact
            </span>
            <div className="space-y-3 text-xs text-[#77766E] leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#737B5B] mt-0.5 shrink-0" />
                <span>
                  Atelier 4, Old Harbour Promenade, Fort Kochi, Kerala 682001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#737B5B] shrink-0" />
                <a
                  href="mailto:hello@cozystudio.example"
                  className="hover:text-[#242520] transition-colors"
                >
                  hello@cozystudio.example
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#737B5B] shrink-0" />
                <span>+91 (0) 484 290 8820</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Cozy Studio on Instagram"
                className="w-8 h-8 rounded-full border border-[#D9D4CA] flex items-center justify-center text-[#242520] hover:border-[#737B5B] hover:text-[#737B5B] transition-colors"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Cozy Studio on LinkedIn"
                className="w-8 h-8 rounded-full border border-[#D9D4CA] flex items-center justify-center text-[#242520] hover:border-[#737B5B] hover:text-[#737B5B] transition-colors"
              >
                <LinkedinIcon size={14} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="View Cozy Studio Moodboards on Pinterest"
                className="w-8 h-8 rounded-full border border-[#D9D4CA] flex items-center justify-center text-[#242520] hover:border-[#737B5B] hover:text-[#737B5B] transition-colors"
              >
                <PinterestIcon size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77766E]">
          <div className="flex flex-wrap items-center gap-6">
            <span>&copy; {new Date().getFullYear()} Cozy Studio. All rights reserved.</span>
            <span className="hidden sm:inline text-[#D9D4CA]">&bull;</span>
            <span className="text-[11px] tracking-wider uppercase">
              Contemporary Interior & Spatial Design
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="group flex items-center gap-2 text-xs uppercase tracking-widest text-[#242520] hover:text-[#737B5B] transition-colors"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full border border-[#D9D4CA] group-hover:border-[#737B5B] group-hover:-translate-y-1 flex items-center justify-center transition-all duration-300">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
