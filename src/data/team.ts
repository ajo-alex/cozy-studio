export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  focus: string;
  social: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "maya-menon",
    name: "Maya Menon",
    role: "Studio Director & Founder",
    focus: "Architectural Direction & Curatorial Vision",
    bio: "With over 14 years shaping high-end residential and cultural spaces, Maya champions warm architectural minimalism rooted in regional craftsmanship and natural materials.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    social: "https://instagram.com",
  },
  {
    id: "rahul-varma",
    name: "Rahul Varma",
    role: "Lead Interior Designer",
    focus: "Materiality & Bespoke Joinery",
    bio: "Trained in Milan and Ahmedabad, Rahul obsessively details timber joints, natural lime plaster textures, and custom lighting fixtures that bring sensory depth to every room.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    social: "https://instagram.com",
  },
  {
    id: "ananya-nair",
    name: "Ananya Nair",
    role: "Spatial Designer",
    focus: "Circulation & Biophilic Harmony",
    bio: "Ananya’s background in environmental architecture allows her to sculpt fluid daylight paths, acoustic transitions, and indoor courtyard sanctuaries that nurture well-being.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
    social: "https://instagram.com",
  },
  {
    id: "david-chen",
    name: "David Chen",
    role: "Design & Project Coordinator",
    focus: "Turnkey Execution & Artisan Liason",
    bio: "David bridges the conceptual drawings and on-site reality, liaising between stonemasons, carpenters, and engineering teams to preserve perfection in every millimetre.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    social: "https://instagram.com",
  },
];

