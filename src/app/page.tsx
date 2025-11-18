'use client';
import { useRef } from 'react';
import { HeroSection } from '@/components/HeroSection'
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { FeaturedCarousel } from '@/components/FeaturedCarousal';
import { Contact } from '@/components/Contact';

export default function Home() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#projects");
    }
  };

  return (
    <>
      <HeroSection onScrollToProjects={scrollToProjects} />
      <About/>
      <Skills />     
      <FeaturedCarousel /> 
      <Projects  />
      <Contact/>
    </>
  )
}