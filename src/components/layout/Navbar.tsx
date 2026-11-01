"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { MagneticButton } from "../ui/MagneticButton";

const NAV_LINKS = [
  { name: "Studio", href: "#studio" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Selected Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Our Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? "py-3 bg-[#F5F2EB]/90 backdrop-blur-md border-b border-[#D9D4CA] shadow-sm text-[#242520]"
            : "py-6 sm:py-8 bg-transparent text-[#F5F2EB]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none"
            aria-label="Cozy Studio Home"
          >
            <span
              className={`font-serif text-xl sm:text-2xl font-light tracking-[0.22em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-[#242520]" : "text-[#F5F2EB] drop-shadow-sm"
              }`}
            >
              Cozy Studio
            </span>
            <span
              className={`text-[9px] uppercase tracking-[0.3em] font-sans transition-colors duration-300 ${
                isScrolled ? "text-[#77766E]" : "text-[#F5F2EB]/80"
              }`}
            >
              Spatial Architecture
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center space-x-7"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-xs uppercase tracking-[0.2em] font-medium py-1 transition-colors duration-200 group ${
                  isScrolled
                    ? "text-[#242520]/80 hover:text-[#737B5B]"
                    : "text-[#F5F2EB]/90 hover:text-[#F5F2EB]"
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#737B5B]" : "bg-[#F5F2EB]"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Action: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <MagneticButton
              onClick={() => {
                const target = document.getElementById("contact");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-[#242520] text-[#F5F2EB] hover:bg-[#737B5B]"
                  : "bg-[#F5F2EB]/90 text-[#242520] hover:bg-[#F5F2EB] backdrop-blur-sm shadow-md"
              }`}
            >
              <span>Start a Project</span>
              <ArrowUpRight size={14} />
            </MagneticButton>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className={`lg:hidden flex items-center justify-center p-2 rounded-none transition-colors ${
                isScrolled
                  ? "text-[#242520] hover:text-[#737B5B]"
                  : "text-[#F5F2EB] hover:text-[#F5F2EB]/80"
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}

