import React from "react";

interface SectionLabelProps {
  number: string;
  label: string;
  theme?: "light" | "dark";
  className?: string;
}

export function SectionLabel({
  number,
  label,
  theme = "light",
  className = "",
}: SectionLabelProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase font-medium ${
        isDark ? "text-[#E8E0D4]/70" : "text-[#77766E]"
      } ${className}`}
    >
      <span className={isDark ? "text-[#737B5B]" : "text-[#737B5B]"}>{number}</span>
      <span className={isDark ? "bg-[#E8E0D4]/30" : "bg-[#D9D4CA]"} style={{ width: "24px", height: "1px" }} />
      <span>{label}</span>
    </div>
  );
}

