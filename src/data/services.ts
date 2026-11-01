export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  previewImage: string;
}

export const services: ServiceItem[] = [
  {
    id: "residential-interiors",
    number: "01",
    title: "Residential Interiors",
    shortDescription:
      "Complete interior design solutions for apartments, villas, and private residences.",
    fullDescription:
      "From bespoke spatial layouts to tactile material palettes, we tailor private living spaces that honor the rituals of daily life. We balance architectural discipline with genuine warmth to create homes that age gracefully.",
    deliverables: [
      "Full spatial architectural drawings",
      "Custom millwork & joinery design",
      "Lighting design & luminaire schedules",
      "Turnkey site coordination",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "space-planning",
    number: "02",
    title: "Space Planning",
    shortDescription:
      "Intelligent layouts that improve flow, functionality, and everyday comfort.",
    fullDescription:
      "We interrogate the volume of every room to eliminate awkward dead zones, optimize natural ventilation and daylight paths, and create intuitive circulation that feels effortless to navigate.",
    deliverables: [
      "2D & 3D volumetric space studies",
      "Circulation & daylight analysis",
      "Zoning & acoustic partitioning",
      "Ergonomic spatial optimization",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "material-finish",
    number: "03",
    title: "Material & Finish Selection",
    shortDescription:
      "A considered approach to surfaces, colors, textures, furniture, and fixtures.",
    fullDescription:
      "Materiality is the soul of spatial experience. We assemble deeply tactile physical mood boards with natural stones, lime plasters, oiled timbers, and artisanal metals that develop rich patinas over time.",
    deliverables: [
      "Tactile physical material sample boards",
      "Comprehensive specification schedules",
      "Eco-conscious and non-toxic finish sourcing",
      "Custom patina & stain development",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "furniture-styling",
    number: "04",
    title: "Furniture & Styling",
    shortDescription:
      "Curated furniture, lighting, artwork, and decorative details that bring a space together.",
    fullDescription:
      "We source rare vintage finds, commission custom furniture pieces from master carpenters, and collaborate with contemporary ceramicists and fiber artists to give each room a soul of its own.",
    deliverables: [
      "Custom furniture prototypes & build oversight",
      "Gallery art advisory & framing curation",
      "Textile, linen & soft furnishing selection",
      "On-site object styling & final staging",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "commercial-interiors",
    number: "05",
    title: "Commercial Interiors",
    shortDescription:
      "Distinctive environments for cafés, studios, offices, boutiques, and hospitality spaces.",
    fullDescription:
      "We build immersive physical brand environments that evoke emotional resonance, foster productivity, and create memorable customer journeys for boutique brands and hospitality pioneers.",
    deliverables: [
      "Brand spatial identity translation",
      "High-traffic commercial durability planning",
      "Custom retail displays & reception desks",
      "Acoustic & atmospheric ambiance curation",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "turnkey-interior",
    number: "06",
    title: "Turnkey Interior Design",
    shortDescription:
      "A coordinated design and execution experience, from the initial concept through project completion.",
    fullDescription:
      "Complete end-to-end execution where we take single-point responsibility for architectural detailing, procurement, craftsman supervision, quality audits, and handover.",
    deliverables: [
      "Dedicated senior project manager",
      "Transparent procurement & timeline reporting",
      "Rigorous contractor quality audits",
      "Turnkey white-glove handover",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
  },
];

