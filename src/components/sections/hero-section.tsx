
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Instagram, Codepen } from 'lucide-react';
import Link from 'next/link';

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
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl w-full z-10 mt-10 sm:mt-0">
          <p className="text-primary font-mono text-base sm:text-lg mb-3 sm:mb-4">{introText}</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-100 mb-2 sm:mb-3">{name}</h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-400 mb-6 sm:mb-8">{tagline}</h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl">
            {description}
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 sm:px-10 text-sm sm:text-base font-mono"
            onClick={() => { window.location.href = "mailto:" + email; }}
          >
            Get In Touch
          </Button>
        </div>
      </main>

      {/* Left Social Icons */}
      <aside className="hidden md:flex fixed bottom-0 left-6 lg:left-10 z-20 flex-col items-center space-y-5">
        <Link href="https://github.com/darshanbhuva" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-400 hover:text-primary transition-colors">
          <Github size={20} />
        </Link>
        <Link href="https://linkedin.com/in/darshanbhuva" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-primary transition-colors">
          <Linkedin size={20} />
        </Link>
        <Link href="https://twitter.com/darshanbhuva" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-slate-400 hover:text-primary transition-colors">
          <Twitter size={20} />
        </Link>
        <Link href="https://instagram.com/darshanbhuva" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="text-slate-400 hover:text-primary transition-colors">
          <Instagram size={20} />
        </Link>
        <Link href="https://codepen.io/darshanbhuva" target="_blank" rel="noopener noreferrer" aria-label="Codepen Profile" className="text-slate-400 hover:text-primary transition-colors">
          <Codepen size={20} />
        </Link>
        <div className="h-24 w-px bg-slate-600 mt-5"></div>
      </aside>

      {/* Right Email */}
      <aside className="hidden md:flex fixed bottom-0 right-6 lg:right-10 z-20 flex-col items-center">
        <div className="flex flex-col items-center space-y-6" style={{ height: 'calc(10rem + 100px)'}}> {/* Height to align email with icons approximately */}
          <a
            href={"mailto:" + email}
            className="text-slate-400 hover:text-primary transition-colors font-mono text-xs tracking-wider"
            style={{ writingMode: 'vertical-rl' }}
          >
            {email}
          </a>
          <div className="h-24 w-px bg-slate-600 flex-grow"></div> {/* Line takes remaining space */}
        </div>
      </aside>
    </section>
  );
}
