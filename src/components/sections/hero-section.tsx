
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Briefcase } from 'lucide-react'; // Import the Briefcase icon

export default function HeroSection() {
  const introText = "Hi, my name is";
  const name = "Shriram Vibhute";
  const tagline = "Machine Learning Engineer";
  const description = "From uncovering insights with Data Science and  Machine Learning to building intelligent solutions with Deep Learning, MLOps, and Gen AI";
  const email = "darshanbhuva57@gmail.com";

  return (
    <section className="min-h-screen flex flex-col bg-background text-foreground relative overflow-x-hidden animate-fade-in">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-start pr-4 sm:pr-6 lg:pr-8 pl-12 sm:pl-20 lg:pl-24"> {/* Increased left padding */}
        <div className="text-left max-w-3xl w-full z-10 mt-10 sm:mt-0">
          <p className="font-mono font-[450] text-primary text-[0.95rem] mb-8 [text-shadow:0_0_10px_hsl(var(--primary))]">
            {introText}
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-100 mb-2 sm:mb-3">{name}</h1>
          <h2 className="text-base sm:text-lg font-bold text-slate-400 mb-6 sm:mb-8">
            {tagline}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-background hover:text-primary px-8 py-4 font-[450] text-[0.84rem] shadow-lg shadow-primary/30"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '#projects';
                }
              }}
            >
              <Briefcase className="mr-2 h-4 w-4" /> {/* Added icon here */}
              View Projects
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-background hover:text-primary px-8 py-4 font-[450] text-[0.84rem] shadow-lg shadow-primary/30"
            >
              <a href="/resume_darshan_bhuva.pdf" download="Darshan_Bhuva_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
}
