// data/projects.ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: "Web" | "Mobile" | "UI/UX";
  tags: string[];
  liveUrl: string;
  caseStudyUrl: string;
  featured?: boolean; 
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with seamless checkout, inventory management, and personalized recommendations.",
    image:
      "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYyNzUxNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    liveUrl: "#",
    caseStudyUrl: "/projects/e-commerce-platform",
    featured: true,
    year: "2024",
    role: "Front-End Developer"
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    description:
      "Intuitive mobile banking experience with biometric security, instant transfers, and financial insights dashboard.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyNzk1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Mobile",
    tags: ["React Native", "Firebase", "Figma"],
    liveUrl: "#",
    caseStudyUrl: "/projects/mobile-banking-app",
    featured: true,
    year: "2024",
    role: "Front-End Developer"
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    description:
      "Comprehensive analytics dashboard for SaaS businesses with real-time data visualization and team collaboration tools.",
    image:
      "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2Mjg1MjY3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Web",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    caseStudyUrl: "/projects/saas-dashboard",
    year: "2024",
    role: "Front-End Developer"
  },
  {
    slug: "health-fitness-app",
    title: "Health & Fitness App",
    description:
      "Mobile app for tracking workouts, nutrition, and wellness goals with AI-powered coaching recommendations.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyNzk1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Mobile",
    tags: ["React Native", "TensorFlow", "Firebase"],
    liveUrl: "#",
    caseStudyUrl: "/projects/health-fitness-app",
    year: "2024",
    role: "Front-End Developer"
  },
  {
    slug: "design-system",
    title: "Design System",
    description:
      "Comprehensive design system with reusable components, documentation, and accessibility guidelines for enterprise apps.",
    image:
      "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2Mjg1MjY3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "UI/UX",
    tags: ["Figma", "Storybook", "React", "TypeScript"],
    liveUrl: "#",
    caseStudyUrl: "/projects/design-system",
    year: "2024",
    role: "Front-End Developer"
  },
  {
    slug: "real-estate-portal",
    title: "Real Estate Portal",
    description:
      "Modern property listing platform with virtual tours, mortgage calculator, and AI-powered property matching.",
    image:
      "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYyNzUxNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Web",
    tags: ["Next.js", "Three.js", "Maps API", "Tailwind"],
    liveUrl: "#",
    caseStudyUrl: "/projects/real-estate-portal",
    year: "2024",
    role: "Front-End Developer"
  }
];

// Helper functions
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map(project => project.slug);
};