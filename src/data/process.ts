export interface ProcessStep {
  number: string;
  stage: string;
  title: string;
  description: string;
  details: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    stage: "Discover",
    title: "Understanding Your World",
    description: "We understand your lifestyle, preferences, space, budget, and goals.",
    details:
      "We begin with immersive conversations and on-site spatial surveys to map how you move, rest, and entertain. We unearth your aesthetic inclinations, functional necessities, and project ambitions.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=85",
  },
  {
    number: "02",
    stage: "Concept",
    title: "Formulating the Vision",
    description: "We develop the design direction, layout, materials, and visual language.",
    details:
      "Through hand-drawn zoning diagrams, 3D spatial studies, and tactile material trays, we crystallize the conceptual foundation. Every volume, texture, and light angle is explored.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85",
  },
  {
    number: "03",
    stage: "Create",
    title: "Craft & Coordination",
    description:
      "We coordinate design development, detailing, sourcing, and execution according to the agreed scope.",
    details:
      "Our architectural studio produces precision working drawings while our sourcing team collaborates with master woodworkers, stone masons, and metal fabricators to craft bespoke components.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85",
  },
  {
    number: "04",
    stage: "Complete",
    title: "The Final Touch",
    description: "We refine the finishing details and prepare the space for everyday life.",
    details:
      "We orchestrate art installation, textile dressing, acoustic balancing, and delicate styling so you step into a fully realized environment ready to be lived in from day one.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
  },
];

