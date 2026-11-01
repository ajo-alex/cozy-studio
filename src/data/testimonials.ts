export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
  location: string;
  year: string;
  image?: string;
}

// Demo client feedback for portfolio demonstration
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Working with Cozy Studio felt less like a renovation and more like discovering the soul of our home. Every evening as the warm light filters through the lime plaster walls, we are reminded of the deliberate care poured into every corner.",
    author: "Kavita & Siddharth Rao",
    role: "Homeowners",
    project: "The Olive Residence",
    location: "Kochi, Kerala",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=85",
  },
  {
    id: "testimonial-2",
    quote:
      "They have an extraordinary ability to create absolute calm. Our space is expansive, yet intimate. The acoustic comfort and natural materials have completely transformed our family’s pace of living.",
    author: "Arjun Nambiar",
    role: "Architect & Collector",
    project: "The Quiet House",
    location: "Trivandrum, Kerala",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=85",
  },
  {
    id: "testimonial-3",
    quote:
      "Cozy Studio designed our gallery atelier to breathe. Visitors routinely comment on the warmth of the plaster, the tactile timber counters, and the serene daylight. They don't just design rooms; they curate feelings.",
    author: "Pooja Hegde",
    role: "Founder, Sunday Atelier",
    project: "The Sunday Studio",
    location: "Kochi, Kerala",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=85",
  },
];

