// components/case-studies/e-commerce-platform.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Users, Target, CheckCircle, BarChart3, Lightbulb, Code, Palette, Smartphone, Zap, Image as ImageIcon, X } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useParams } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";

export default function EcommerceCaseStudy() {
  const params = useParams();
  const project = getProjectBySlug(params.slug as string);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Case study specific data
  const caseStudyData = {
    timeline: "2 Months",
    role: "Frontend Developer",
    teamSize: "1 Person (Frontend)",
    teamContext: "Worked with backend team via API",
    
    problem: "The client needed a modern, responsive e-commerce frontend that could integrate with their existing backend API while providing an exceptional user experience across all devices.",
    
    solution: "Built a custom e-commerce frontend using Next.js and TypeScript, implementing responsive design principles, seamless API integration, and optimizing for performance and user experience.",
    
    challenges: [
      "Creating responsive designs that work across all device sizes",
      "Implementing complex state management for shopping cart and user sessions",
      "Optimizing performance for fast page loads",
      "Integrating with existing backend APIs and payment systems"
    ],
    
    features: [
      "Responsive product catalog with advanced filtering",
      "Interactive shopping cart with real-time updates",
      "Smooth animations and micro-interactions",
      "Mobile-optimized checkout flow",
      "Accessible UI components",
      "Fast client-side navigation"
    ],
    
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      stateManagement: ["React Context", "Zustand"],
      payment: ["Stripe.js (Frontend)"],
      tools: ["Figma", "Git", "Vercel", "Chrome DevTools"]
    },
    
    results: [
      { metric: "95+", description: "Google PageSpeed Score", icon: Zap },
      { metric: "2.1s", description: "First Contentful Paint", icon: Zap },
      { metric: "100%", description: "Mobile Responsive", icon: Smartphone },
      { metric: "40%", description: "Faster than previous", icon: BarChart3 }
    ],
    
    process: [
      {
        phase: "Design & Planning",
        description: "Collaborated with designers to understand UI requirements and API specifications",
        activities: ["UI Review", "API Documentation", "Technical Planning"],
        icon: Palette
      },
      {
        phase: "Frontend Development",
        description: "Implemented responsive components and integrated with backend APIs",
        activities: ["Component Development", "API Integration", "State Management"],
        icon: Code
      },
      {
        phase: "Performance Optimization",
        description: "Optimized bundle size, implemented lazy loading, and improved Core Web Vitals",
        activities: ["Code Splitting", "Image Optimization", "Performance Testing"],
        icon: Zap
      },
      {
        phase: "Testing & Deployment",
        description: "Conducted cross-browser testing and deployed to production",
        activities: ["Browser Testing", "Responsive Testing", "Production Deployment"],
        icon: CheckCircle
      }
    ],
    
    learnings: [
      "Advanced techniques for responsive design and cross-browser compatibility",
      "Effective state management patterns for complex e-commerce flows",
      "Performance optimization strategies for React applications",
      "Best practices for API integration and error handling"
    ],
    
    myContributions: [
      "Designed and implemented all frontend components",
      "Created responsive layouts for mobile, tablet, and desktop",
      "Integrated with backend APIs for product data and payments",
      "Optimized performance and implemented SEO best practices",
      "Ensured accessibility standards were met"
    ],

    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYyNzUxNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Homepage - Desktop View",
        description: "Modern homepage with featured products and categories"
      },
      {
        url: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyNzk1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Product Page - Mobile View",
        description: "Responsive product page optimized for mobile devices"
      },
      {
        url: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2Mjg1MjY3NXww&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Shopping Cart",
        description: "Interactive cart with real-time price updates"
      },
      {
        url: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYyNzUxNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Checkout Process",
        description: "Streamlined checkout with multiple payment options"
      },
      {
        url: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyNzk1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        title: "User Dashboard - Mobile",
        description: "User account dashboard with order history"
      },
      {
        url: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2Mjg1MjY3NXww&ixlib=rb-4.1.0&q=80&w=1080",
        title: "Search & Filter Results",
        description: "Advanced search functionality with filtering options"
      }
    ]
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16 overflow-hidden">
      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged screenshot"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 relative">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-16 mb-28 relative">
          {/* Left Content */}
          <motion.div 
            className="space-y-8 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/15 text-primary border-primary/30 backdrop-blur-sm px-4 py-2 text-sm">
                {project.category}
              </Badge>
              <Badge variant="secondary" className="bg-blue-500/15 text-blue-500 border-blue-500/30 backdrop-blur-sm px-4 py-2 text-sm">
                Frontend Focus
              </Badge>
            </div>
            
            {/* Title with Gradient */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Project Metadata */}
            <motion.div 
              className="grid grid-cols-2 gap-6 py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Timeline</div>
                  <div className="font-semibold text-lg">{caseStudyData.timeline}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">My Role</div>
                  <div className="font-semibold text-lg">{caseStudyData.role}</div>
                </div>
              </div>
            </motion.div>

            {/* Team Context */}
            {caseStudyData.teamContext && (
              <motion.div 
                className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-blue-500 font-medium">
                  <strong>Team Context:</strong> {caseStudyData.teamContext}
                </p>
              </motion.div>
            )}

            {/* Tags */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {project.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 px-4 py-2 text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <ExternalLink className="w-5 h-5 relative z-10" />
                <span className="relative z-10">View Live Demo</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 border-2 border-primary/20 rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/30 rounded-full"></div>
                </div>
                
                <div className="text-center relative z-10">
                  <div className="text-8xl mb-6">🛒</div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Frontend Showcase
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Custom-built UI components with focus on performance, accessibility, and user experience
                  </p>
                </div>

                <motion.div
                  className="absolute top-6 right-6 w-6 h-6 bg-primary/20 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-4 h-4 bg-secondary/30 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* My Contributions Section */}
        <section className="mb-28">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            My Contributions
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudyData.myContributions.map((contribution, index) => (
              <motion.div
                key={contribution}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-500 h-full flex items-start gap-4 group-hover:shadow-xl group-hover:shadow-primary/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground leading-relaxed">{contribution}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enhanced Problem & Solution Section */}
        <section className="grid lg:grid-cols-2 gap-16 mb-28">
          {/* Problem */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-800">The Challenge</h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-2"></div>
                </div>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {caseStudyData.problem}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Key Challenges</h3>
                {caseStudyData.challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-red-100 hover:border-red-300 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-slate-700 font-medium">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/5 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-800">The Solution</h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2"></div>
                </div>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {caseStudyData.solution}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Key Features</h3>
                {caseStudyData.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-green-100 hover:border-green-300 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Screenshot Gallery Section */}
        <section className="mb-28">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Project Screenshots
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A visual overview of the main features and user interfaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudyData.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(screenshot.url)}
              >
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1 line-clamp-3">
                    {screenshot.description}
                  </p>
                  
                  {/* Simple Image Preview */}
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 mb-2">
                    <div className="text-3xl">{screenshot.title.includes('Mobile') ? "📱" : "💻"}</div>
                  </div>
                  
                  <div className="mt-2 text-right">
                    <span className="text-xs text-primary font-medium hover:text-primary/80 transition-colors">
                      Click to enlarge
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-28">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Development Process
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 to-secondary/20 rounded-full"></div>
            
            <div className="space-y-12">
              {caseStudyData.process.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <motion.div
                    key={phase.phase}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <motion.div 
                        className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/10"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary mb-1">0{index + 1}</div>
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                              {phase.phase}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{phase.description}</p>
                        <div className="space-y-2">
                          {phase.activities.map((activity, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-foreground">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-28">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Tech Stack
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(caseStudyData.technologies).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/10 h-full">
                  <h3 className="text-xl font-semibold mb-6 text-primary capitalize group-hover:scale-110 transition-transform duration-300">
                    {category.replace(/([A-Z])/g, ' $1')}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {techs.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-background/80 backdrop-blur-sm border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 text-sm py-2 px-4 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-28">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Performance Results
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudyData.results.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <motion.div
                  key={result.metric}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-2xl p-8 text-center border border-primary/20 hover:border-primary/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-2">{result.metric}</div>
                    <div className="text-muted-foreground font-medium">{result.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Learnings Section */}
        <motion.section 
          className="bg-gradient-to-br from-card/50 to-card/30 rounded-3xl p-12 border border-border backdrop-blur-sm mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Key Learnings
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudyData.learnings.map((learning, index) => (
              <motion.div
                key={learning}
                className="flex items-start gap-6 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <p className="text-foreground text-lg leading-relaxed group-hover:text-primary transition-colors">
                  {learning}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section 
          className="text-center py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to create exceptional digital experiences that drive results.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}