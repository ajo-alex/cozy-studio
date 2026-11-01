"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#F5F2EB] text-[#242520] p-6 sm:p-10 transition-opacity duration-300"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#D9D4CA] pb-6">
        <a
          href="#"
          onClick={onClose}
          className="font-serif text-2xl tracking-[0.2em] font-light uppercase text-[#242520]"
        >
          Cozy Studio
        </a>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="group flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-widest text-[#242520] hover:text-[#737B5B] transition-colors"
        >
          <span>Close</span>
          <div className="w-8 h-8 rounded-full border border-[#D9D4CA] group-hover:border-[#737B5B] flex items-center justify-center transition-colors">
            <X size={15} />
          </div>
        </button>
      </div>

      {/* Main Nav Links & Decorative Visual */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-8">
        <div className="md:col-span-8 flex flex-col space-y-4 sm:space-y-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between text-3xl sm:text-5xl font-serif font-light text-[#242520] hover:text-[#737B5B] transition-colors py-1"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#77766E] uppercase tracking-wider">
                  0{idx + 1}
                </span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  {link.name}
                </span>
              </div>
              <ArrowUpRight
                size={24}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-[#737B5B]"
              />
            </a>
          ))}
        </div>

        {/* Decorative Editorial Card for Mobile Menu */}
        <div className="hidden md:flex md:col-span-4 flex-col justify-end border-l border-[#D9D4CA] pl-8">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#D9D4CA] mb-4">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=85"
              alt="Cozy Studio Interior Craft"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif italic text-base text-[#77766E]">
            &ldquo;Spaces that feel like you.&rdquo;
          </p>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="pt-6 border-t border-[#D9D4CA] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#77766E]">
        <div className="flex items-center gap-2">
          <MapPin size={13} className="text-[#737B5B]" />
          <span>Kochi &middot; Bangalore &middot; Trivandrum</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={13} className="text-[#737B5B]" />
          <a
            href="mailto:hello@cozystudio.example"
            className="hover:text-[#242520] transition-colors"
          >
            hello@cozystudio.example
          </a>
        </div>
        <div className="flex items-center gap-2 sm:justify-end">
          <Phone size={13} className="text-[#737B5B]" />
          <span>+91 (0) 484 290 8820</span>
        </div>
      </div>
    </div>
  );
}

