"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "./theme/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio-data";
import { Handshake } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Featured", href: "#featured" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-3"
        style={{
          backdropFilter: backdropBlur,
        }}
      >
        {/* Background that changes with scroll */}
        <motion.div 
          className="absolute inset-0 bg-background" 
          style={{
            opacity: useTransform(scrollY, [0, 100], [0, 0.9]),
          }}
        />
        
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          {/* Logo with your name */}
          <motion.a
            href="#home"
            className="text-xl font-bold tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#home')?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="gradient-text text-2xl font-dancing">{personalInfo.logo}</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors relative group text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          {/* Theme Toggle & Let's Connect Button & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Let's Connect Button - Desktop only */}
            <motion.button
              onClick={() => handleNavClick("#contact")}
              className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:bg-primary/80 transition-colors text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect <Handshake className="w-4 h-4" />
            </motion.button>
            
            <ThemeToggle />

            
            <button
              className="md:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Only changed display logic */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ 
          display: mobileMenuOpen ? 'block' : 'none',
          pointerEvents: mobileMenuOpen ? 'auto' : 'none'
        }}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg border-l border-border">
          <div className="flex flex-col items-center justify-center h-full gap-6 p-8">

            {/* Mobile navigation */}
            <nav className="flex flex-col items-center gap-6 w-full">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-md text-foreground hover:text-primary transition-colors py-3 w-full text-center border-b border-border last:border-b-0"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    x: mobileMenuOpen ? 0 : 50,
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Contact CTA in mobile menu */}
            <motion.button
              onClick={() => handleNavClick("#contact")}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                y: mobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: 0.5 }}
            >             
              Let's Connect <Handshake className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}