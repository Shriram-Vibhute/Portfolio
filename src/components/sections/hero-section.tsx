
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
// Icons like Github, Linkedin, etc. are no longer used directly here.
// import { Github, Linkedin, Twitter, Instagram, Codepen } from 'lucide-react';
// Link component is no longer used directly here.
// import Link from 'next/link';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const introText = "Hi, my name is";
  const name = "Darshan Bhuva";
  const tagline = "Building the web, better.";
  const description = "Innovating the web with purpose and precision. As a full-stack engineer, I create accessible, user-friendly digital experiences that leave a lasting impact.";
  const email = "darshanbhuva57@gmail.com";

  if (!isMounted) {
    // Fallback for SSR or pre-hydration to avoid layout shifts or hydration errors.
    return <section className="min-h-screen bg-background"></section>;
  }

  return (
    <section className="min-h-screen flex flex-col bg-background text-foreground relative overflow-x-hidden">
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-start pr-4 sm:pr-6 lg:pr-8 pl-12 sm:pl-20 lg:pl-24"> {/* Increased left padding */}
        <div className="text-left max-w-3xl w-full z-10 mt-10 sm:mt-0">
          <p className="font-mono font-[450] text-primary text-[0.84rem] mb-3 sm:mb-4 [text-shadow:0_0_10px_hsl(var(--primary))]">
            {introText}
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-100 mb-2 sm:mb-3">{name}</h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-400 mb-6 sm:mb-8">{tagline}</h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-background hover:text-primary px-8 py-4 sm:px-10 font-[450] text-[0.84rem] shadow-lg shadow-primary/30"
              onClick={() => {
                const projectsSection = document.getElementById('projects'); // Assuming you'll have a section with id="projects"
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '#projects'; // Fallback if section not found
                }
              }}
            >
              View Projects
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-background hover:text-primary px-8 py-4 sm:px-10 font-[450] text-[0.84rem] shadow-lg shadow-primary/30"
            >
              <a href="/resume_darshan_bhuva.pdf" download="Darshan_Bhuva_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
}
