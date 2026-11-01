export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  location: string;
  style: string;
  area: string;
  year: string;
  description: string;
  concept: string;
  highlights: string[];
  mainImage: string;
  gallery: string[];
  aspectRatio?: "landscape" | "portrait" | "wide";
}

export const projects: Project[] = [
  {
    id: "olive-residence",
    number: "01",
    name: "The Olive Residence",
    category: "Residential Interior",
    location: "Kochi, Kerala",
    style: "Contemporary Minimalism",
    area: "4,800 sq.ft",
    year: "2024",
    description:
      "A private family sanctuary framed by natural daylight, monolithic lime plaster surfaces, and bespoke teak millwork. The home seamlessly marries indoor living with lush courtyards, creating a serene oasis tuned to the tropical coastal climate.",
    concept:
      "Subtle architectural volumes that balance openness with intimate pockets of retreat, centered around a courtyard filled with native palms.",
    highlights: [
      "Monolithic honed limestone staircase",
      "Handcrafted smoked-oak kitchen joinery",
      "Floor-to-ceiling pivot glass apertures",
      "Curated vintage Scandinavian & Indian modernist design pieces",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=85",
    ],
    aspectRatio: "wide",
  },
  {
    id: "quiet-house",
    number: "02",
    name: "The Quiet House",
    category: "Full Home Interior",
    location: "Trivandrum, Kerala",
    style: "Warm Minimalism",
    area: "5,600 sq.ft",
    year: "2023",
    description:
      "Conceived as an architectural retreat where silence and tactile materiality reign supreme. Board-formed concrete, micro-cement flooring, and warm cedar timber soften the geometry, welcoming natural sea breeze and filtered daylight.",
    concept:
      "An introspective home configured around sensory calm, natural acoustics, and unhurried transition between rooms.",
    highlights: [
      "Double-height living pavilion with timber battens",
      "Concealed acoustic wall panelling",
      "Sunken conversation pit with tactile linen upholstery",
      "Custom aged brass hardware patinated by sea air",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85",
    ],
    aspectRatio: "portrait",
  },
  {
    id: "casa-verde",
    number: "03",
    name: "Casa Verde",
    category: "Apartment Interior",
    location: "Bangalore, Karnataka",
    style: "Natural Contemporary",
    area: "3,200 sq.ft",
    year: "2024",
    description:
      "A high-rise penthouse transformation celebrating botanical harmony and refined urban living. Muted olive tones, fluted travertine surfaces, and hand-loomed raw linen drape the interior in understated warmth and acoustic serenity.",
    concept:
      "Bringing the garden inward through natural stone, botanical pigments, and sculptural biophilic elements.",
    highlights: [
      "Verde Alpi marble kitchen island block",
      "Continuous site-cast terrazzo flooring",
      "Sculptural ceramic wall sconces and light objects",
      "Integrated terrace conservatory with botanical library",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85",
    ],
    aspectRatio: "landscape",
  },
  {
    id: "sunday-studio",
    number: "04",
    name: "The Sunday Studio",
    category: "Commercial Interior",
    location: "Kochi, Kerala",
    style: "Modern Organic",
    area: "2,400 sq.ft",
    year: "2023",
    description:
      "A multidisciplinary creative atelier and boutique gallery. Designed with earthy clay plaster, arched spatial dividers, and reconfigurable raw timber furniture to host exhibitions, design workshops, and slow coffee rituals.",
    concept:
      "A flexible spatial canvas where tactile materials celebrate craft and foster creative dialogue.",
    highlights: [
      "Sculpted terracotta niches and display pedestals",
      "Monolithic micro-cement espresso & reception counter",
      "Modular brass and timber gallery hanging system",
      "Custom washi paper pendant luminaires",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    ],
    aspectRatio: "landscape",
  },
];

