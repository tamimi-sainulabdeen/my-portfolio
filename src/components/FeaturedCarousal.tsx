"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { useRouter } from "next/navigation";



export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const router = useRouter();
  
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    if (!isAutoPlaying || featuredProjects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    setIsAutoPlaying(false);
  };

  const handleViewCaseStudy = () => {
    const currentProject = featuredProjects[currentIndex];
    if (currentProject) {
      router.push(currentProject.caseStudyUrl);
    }
  };

  if (featuredProjects.length === 0) {
    return null; // Or a fallback UI
  }

  return (
    <section id= 'featured' className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-bold font-dancing text-4xl md:text-5xl gradient-text mb-4">
            Featured Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Deep dives into my most impactful work
          </p>
        </motion.div>
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <img
                  src={featuredProjects[currentIndex].image}
                  alt={featuredProjects[currentIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-2xl px-8 md:px-16">
                    <motion.div
                      className="flex items-center gap-4 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-primary text-sm font-medium">
                        {featuredProjects[currentIndex].year}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {featuredProjects[currentIndex].role}
                      </span>
                    </motion.div>

                    <motion.h3
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {featuredProjects[currentIndex].title}
                    </motion.h3>

                    <motion.p
                      className="text-muted-foreground text-lg mb-6 max-w-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {featuredProjects[currentIndex].description}
                    </motion.p>

                   <motion.button
                    onClick={handleViewCaseStudy}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 8px 25px rgba(45, 212, 191, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Case Study
                  </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {featuredProjects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all ${
                  index === currentIndex
                    ? "w-8 h-2 bg-primary rounded-full"
                    : "w-2 h-2 bg-border rounded-full hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}