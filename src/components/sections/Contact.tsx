"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Mail, Phone, MapPin } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "Residential Architecture",
    location: "",
    budget: "$35,000 – $75,000",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Please share a few details about your space.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate robust API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectType: "Residential Architecture",
        location: "",
        budget: "$35,000 – $75,000",
        message: "",
      });
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#292D26] text-[#F5F2EB] py-24 sm:py-36 border-t border-[#F5F2EB]/15 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#F5F2EB_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Label */}
        <div className="mb-14 sm:mb-20">
          <SectionLabel number="06" label="START A CONVERSATION" theme="dark" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Expressive Headline & Studio Info */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#F5F2EB] leading-[1.08] tracking-tight">
              Your space. <br />
              Your story. <br />
              <span className="italic font-normal text-[#E8E0D4]">Let&apos;s begin.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#E8E0D4]/75 font-light leading-relaxed max-w-md">
              Planning a new home, reimagining a room, or creating a space for your business? We&apos;d
              love to hear what you have in mind.
            </p>

            {/* Direct Contacts Block */}
            <div className="space-y-4 pt-6 border-t border-[#F5F2EB]/15 text-xs text-[#E8E0D4]/80">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#737B5B] mt-0.5 shrink-0" />
                <span>Atelier 4, Old Harbour Promenade, Fort Kochi, Kerala 682001</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-[#737B5B] shrink-0" />
                <a
                  href="mailto:hello@cozystudio.example"
                  className="hover:text-[#F5F2EB] underline underline-offset-4 decoration-[#737B5B]"
                >
                  hello@cozystudio.example
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-[#737B5B] shrink-0" />
                <span>+91 (0) 484 290 8820</span>
              </div>
            </div>

            {/* Office Locations */}
            <div className="pt-2 text-xs text-[#E8E0D4]/60 space-y-1 font-mono">
              <p>Studios: Kochi &bull; Bangalore &bull; Trivandrum</p>
              <p>Consultations by appointment.</p>
            </div>
          </div>

          {/* Right Column: Integrated Architectural Inquiry Form */}
          <div className="lg:col-span-7 bg-[#242520]/60 border border-[#F5F2EB]/15 p-6 sm:p-10 backdrop-blur-sm">
            {isSuccess ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-14 h-14 rounded-full bg-[#737B5B]/20 border border-[#737B5B] flex items-center justify-center mx-auto text-[#E8E0D4]">
                  <Check size={28} />
                </div>
                <h3 className="font-serif text-3xl font-light text-[#F5F2EB]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#E8E0D4]/80 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Cozy Studio. Maya or a senior designer will review
                  your project details and respond within two business days.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 px-6 py-2.5 border border-[#F5F2EB]/30 text-xs uppercase tracking-widest text-[#F5F2EB] hover:border-[#F5F2EB]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="text-xs uppercase tracking-widest text-[#E8E0D4]/80 block"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Kavita Rao"
                      className="w-full bg-[#292D26]/80 border border-[#F5F2EB]/20 px-4 py-3 text-sm text-[#F5F2EB] placeholder-[#E8E0D4]/30 focus:outline-none focus:border-[#737B5B] transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-300">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs uppercase tracking-widest text-[#E8E0D4]/80 block"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="kavita@example.com"
                      className="w-full bg-[#292D26]/80 border border-[#F5F2EB]/20 px-4 py-3 text-sm text-[#F5F2EB] placeholder-[#E8E0D4]/30 focus:outline-none focus:border-[#737B5B] transition-colors"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-300">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-xs uppercase tracking-widest text-[#E8E0D4]/80 block"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98450 00000"
                      className="w-full bg-[#292D26]/80 border border-[#F5F2EB]/20 px-4 py-3 text-sm text-[#F5F2EB] placeholder-[#E8E0D4]/30 focus:outline-none focus:border-[#737B5B] transition-colors"
                    />
                  </div>

                  {/* Project Location */}
                  <div className="space-y-2">
                    <label
                      htmlFor="location"
                      className="text-xs uppercase tracking-widest text-[#E8E0D4]/80 block"
                    >
                      Project Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Kochi, Bangalore, Dubai"
                      className="w-full bg-[#292D26]/80 border border-[#F5F2EB]/20 px-4 py-3 text-sm text-[#F5F2EB] placeholder-[#E8E0D4]/30 focus:outline-none focus:border-[#737B5B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-xs uppercase tracking-widest text-[#E8E0D4]/80 block"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#292D26] border border-[#F5F2EB]/20 px-4 py-3 text-sm text-[#F5F2EB] focus:outline-none focus:border-[#737B5B] transition-colors"
                    >
                      <option value="Residential Architecture">Residential Architecture</option>
                      <option value="Full Home Interior">Full Home Interior</option>
                      <option value="Apartment Renovation">Apartment Renovation</option>
                      <option value="Commercial Atelier & Hospitality">Commercial & Hospitality</option>
                      <option value="Spatial Styling & Art Curation">Spatial Styling & Art</option>
                    </select>
                  </div>

                  {/* Estimated Budget */}
                  <div className="space-y-2">
                    <label
                      htmlFor="budget"
                      className="text-xs uppercase tracking-widest text-[#E8E0D4]/80 block"
                    >
                      Estimated Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#292D26] border border-[#F5F2EB]/20 px-4 py-3 text-sm text-[#F5F2EB] focus:outline-none focus:border-[#737B5B] transition-colors"
                    >
                      <option value="$15,000 – $35,000">₹15L – ₹35L / $15k – $35k</option>
                      <option value="$35,000 – $75,000">₹35L – ₹75L / $35k – $75k</option>
                      <option value="$75,000 – $150,000">₹75L – ₹1.5Cr / $75k – $150k</option>
                      <option value="$150,000+">₹1.5Cr+ / $150k+</option>
                    </select>
                  </div>
                </div>

                {/* Project Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-widest text-[#E8E0D4]/80 block"
                  >
                    Tell Us About Your Space & Timeline *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your property, key requirements, anticipated start date, and design aspirations..."
                    className="w-full bg-[#292D26]/80 border border-[#F5F2EB]/20 px-4 py-3 text-sm text-[#F5F2EB] placeholder-[#E8E0D4]/30 focus:outline-none focus:border-[#737B5B] transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-300">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#F5F2EB] text-[#242520] hover:bg-[#737B5B] hover:text-[#F5F2EB] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Transmitting Inquiry..." : "Submit Project Inquiry"}</span>
                    <ArrowRight size={14} />
                  </button>
                  <p className="text-[11px] text-[#E8E0D4]/50 text-center mt-3 tracking-wide">
                    We respect your privacy. No spam. Direct response from our design studio.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
