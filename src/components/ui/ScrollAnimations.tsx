"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/animations/gsap";

export function ScrollAnimations() {
  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Reveal Headlines with upward mask/fade
      const headlines = document.querySelectorAll(".gsap-reveal-title");
      headlines.forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 2. Reveal Images with scale & subtle mask
      const images = document.querySelectorAll(".gsap-reveal-image");
      images.forEach((elem) => {
        gsap.fromTo(
          elem,
          { opacity: 0, y: 25, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 3. Staggered Items (principles, steps, team, services)
      const staggerContainers = document.querySelectorAll(".gsap-stagger-container");
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll(".gsap-stagger-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: container,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    });

    return () => {
      ctx.revert(); // Clean up all GSAP timelines and ScrollTriggers
    };
  }, []);

  return null;
}

