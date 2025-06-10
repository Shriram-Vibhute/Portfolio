
"use client";

import Link from 'next/link';
import { Home, Github, Linkedin, X, Codepen, Mail, FileText } from 'lucide-react';

export default function StickyBottomNav() {
  const iconSize = 20;
  const socialLinks = [
    { href: "/", icon: <Home size={iconSize} />, label: "Home" },
    { href: "https://github.com/darshanbhuva", icon: <Github size={iconSize} />, label: "GitHub" },
    { href: "https://linkedin.com/in/darshanbhuva", icon: <Linkedin size={iconSize} />, label: "LinkedIn" },
    { href: "https://x.com/darshanbhuva", icon: <X size={iconSize} />, label: "X / Twitter" },
    { href: "https://codepen.io/darshanbhuva", icon: <Codepen size={iconSize} />, label: "CodePen" },
    { href: "#", icon: <span className="font-semibold text-sm leading-none px-1">Up</span>, label: "Upwork" }, // Placeholder href for Upwork
    { href: "mailto:darshanbhuva57@gmail.com", icon: <Mail size={iconSize} />, label: "Email" },
    { href: "/resume_darshan_bhuva.pdf", icon: <FileText size={iconSize} />, label: "Resume", download: true },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 print:hidden">
      <div className="flex items-center gap-1 sm:gap-2 bg-neutral-900/80 backdrop-blur-md text-neutral-300 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-xl border border-neutral-700/50">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') || link.href.startsWith('mailto:') ? '_blank' : undefined}
            rel={link.href.startsWith('http') || link.href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
            download={link.download ? "Darshan_Bhuva_Resume.pdf" : undefined}
            aria-label={link.label}
            title={link.label}
            className="p-2 rounded-full hover:bg-neutral-700/70 hover:text-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/70"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
}
