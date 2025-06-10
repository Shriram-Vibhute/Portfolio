
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Instagram, Codepen, Menu } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-foreground hover:text-primary transition-colors" aria-label="Homepage">
            D
          </Link>
          
          <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
            <Link href="#home" className="text-sm text-slate-300 hover:text-primary transition-colors">Home</Link>
            <Link href="#experience" className="text-sm text-slate-300 hover:text-primary transition-colors">Experience</Link>
            <Link href="#projects" className="text-sm text-slate-300 hover:text-primary transition-colors">Projects</Link>
            <Link href="#contact" className="text-sm text-slate-300 hover:text-primary transition-colors">Contact</Link>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              <Menu className="h-6 w-6 text-slate-300" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden pt-16 sm:pt-20 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            <Link href="#home" className="text-xl text-slate-300 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="#experience" className="text-xl text-slate-300 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Experience</Link>
            <Link href="#projects" className="text-xl text-slate-300 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            <Link href="#contact" className="text-xl text-slate-300 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
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
            href={`mailto:${email}`}
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
