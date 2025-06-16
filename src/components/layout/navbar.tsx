
'use client';

import Link from 'next/link';
import { Home, Info, Briefcase, PenSquare, Mail, Menu, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const iconComponents: Record<string, LucideIcon> = {
  Home,
  Info,
  Briefcase,
  PenSquare,
  Mail,
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home', iconName: 'Home' },
    { href: '#about', label: 'About', iconName: 'Info' },
    { href: '#projects', label: 'Projects', iconName: 'Briefcase' },
    { href: '#blogs', label: 'Blogs', iconName: 'PenSquare' },
    { href: '#contact', label: 'Contact', iconName: 'Mail' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4 md:justify-center md:px-8">
        
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-accent focus-visible:bg-accent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] bg-background p-6 text-foreground sm:w-[320px]">
              <div className="mb-6 flex items-center space-x-2">
                <span className="text-lg font-semibold text-primary">Navigation</span>
              </div>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const IconComponent = iconComponents[link.iconName];
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-x-3 rounded-md p-3 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="hidden items-center gap-x-4 md:flex lg:gap-x-6">
          {navLinks.map((link) => {
            const IconComponent = iconComponents[link.iconName];
            return (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-x-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent hover:bg-accent/10"
              >
                {IconComponent && <IconComponent className="h-5 w-5" />}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="w-10 md:hidden" aria-hidden="true" />

      </div>
    </nav>
  );
}

