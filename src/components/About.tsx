"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="px-6 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold font-dancing text-5xl md:text-6xl creative-text mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Keeping your paragraphs but with better styling */}
    {/* Simpler Enhanced Text Content */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
  className="space-y-8"
>
  {/* Point 1 */}
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
      <div className="w-px h-full bg-gradient-to-b from-primary to-transparent mt-2"></div>
    </div>
    <div className="flex-1 pb-6">
      <h3 className="text-xl font-semibold text-foreground mb-3">Front-End Development</h3>
      <p className="text-foreground leading-relaxed">
       I build responsive, high-performance interfaces using clean, 
       maintainable code, ensuring smooth interactions and scalable components across all screen sizes.
      </p>
    </div>
  </div>

  {/* Point 2 */}
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
      <div className="w-px h-full bg-gradient-to-b from-secondary to-transparent mt-2"></div>
    </div>
    <div className="flex-1 pb-6">
      <h3 className="text-xl font-semibold text-foreground mb-3">UI/UX Focus</h3>
      <p className="text-foreground leading-relaxed">
       I apply design thinking to turn ideas into intuitive user flows and visually consistent layouts. 
       I focus on accessibility, usability, and creating interfaces that feel natural and engaging for users.
      </p>
    </div>
  </div>

  {/* Point 3 */}
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-foreground mb-3">Problem Solver</h3>
      <p className="text-foreground leading-relaxed">
       I enjoy solving problems through code and continuously strive to improve my skills 
       and take on new frontend challenges.
      </p>
    </div>
  </div>
</motion.div>

          {/* Smaller Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative max-w-md mx-auto">
              {/* Background Decoration */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl transform rotate-3"></div>
              
              {/* Main Image */}
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-lg border border-ring"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/images/tamimi_2.webp"
                  alt="Profile picture"
                  width={450}
                  height={550}
                  className="w-full h-auto object-cover"
                  priority
                  placeholder="blur" // Add this
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6/DMclB18bGYbq2tMUg=="
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl border border-primary/30 backdrop-blur-sm flex items-center justify-center"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/>
              </svg>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 w-14 h-14 bg-secondary/20 rounded-xl border border-secondary/30 backdrop-blur-sm flex items-center justify-center"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-secondary">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}