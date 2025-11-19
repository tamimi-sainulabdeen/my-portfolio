"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./ui/badge";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: "Web" | "Mobile" | "UI/UX";
  tags: string[];
  liveUrl: string;
  caseStudyUrl: string;
}

const projects: Project[] = [
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
  },
  {
    slug: "sreenarayanaguru-open-university",
    title: "Sreenarayanaguru Open University (SGOU)",
    description:
      "A state open university in Kerala that provides flexible higher education opportunities.",
    image:
      "/images/sgou_1.webp",
    category: "Web",
    tags: ["Bootstrap", "MDB", "JavaScript", "CSS"],
    liveUrl: "https://erp.sgou.ac.in/login-candidate",
    caseStudyUrl: "/projects/sreenarayanaguru-open-university",
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
    caseStudyUrl: "#",
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
    caseStudyUrl: "#",
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
    caseStudyUrl: "#",
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
    caseStudyUrl: "#",
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
    caseStudyUrl: "#",
  },
];

const categories = ["All", "Web", "Mobile", "UI/UX"] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-card border border-border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <Badge 
            variant="secondary" 
            className="bg-primary/10 text-primary border-primary/20 text-xs"
          >
            {project.category}
          </Badge>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-foreground text-sm hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(45, 212, 191, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="flex gap-3 pt-2">
          <motion.a
            href={project.liveUrl}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium flex-1"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 4px 12px rgba(45, 212, 191, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
        <Link href={project.caseStudyUrl}>
          <motion.div
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-foreground hover:border-primary hover:text-primary transition-colors text-sm font-medium flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileText className="w-4 h-4" />
            Case Study
          </motion.div>
        </Link>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 -z-10"
        initial={false}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<
    (typeof categories)[number]
  >("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold font-dancing text-4xl md:text-5xl gradient-text mb-4">
           Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my expertise in design and development
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={`${project.title}-${activeCategory}`} 
              project={project} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}