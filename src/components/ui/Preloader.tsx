"use client";

import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isDone, setIsDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      onComplete();
      return;
    }

    // Subtle, fast progress counter
    const startTime = Date.now();
    const duration = 750; // 0.75s total intro

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          onComplete();
        }, 200);
      }
    }, 20);

    // Fallback safety: guarantee preloader dismissal in 1s max
    const safetyTimer = setTimeout(() => {
      clearInterval(timer);
      setIsDone(true);
      onComplete();
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimer);
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-8 sm:p-14 bg-[#F5F2EB] text-[#242520] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        progress >= 100 ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Top branding coordinate */}
      <div className="w-full flex justify-between items-center text-[11px] uppercase tracking-[0.25em] text-[#77766E]">
        <span>Cozy Studio</span>
        <span>Kerala &middot; Bangalore</span>
      </div>

      {/* Center Wordmark & Tagline */}
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.18em] font-light text-[#242520] uppercase">
          Cozy Studio
        </h1>
        <div className="h-[1px] w-12 bg-[#737B5B]" />
        <p className="text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-[#77766E]">
          Interior &middot; Spatial Architecture &middot; Styling
        </p>
      </div>

      {/* Bottom Progress Bar & Counter */}
      <div className="w-full max-w-xs flex flex-col items-center gap-3">
        <div className="w-full h-[1.5px] bg-[#D9D4CA] overflow-hidden">
          <div
            className="h-full bg-[#737B5B] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="w-full flex justify-between text-[10px] tracking-widest text-[#77766E] uppercase">
          <span>Loading Experience</span>
          <span className="font-mono">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

