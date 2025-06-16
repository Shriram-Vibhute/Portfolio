
'use client';

import Link from 'next/link';
import { Moon, Search, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    setIsMounted(true);
    // Attempt to read saved theme preference, otherwise use system preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      // If system preference is light and no saved theme, set to light.
      // setDarkMode(false); // Keep dark as default for this app based on request
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, isMounted]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { href: '#', label: 'Component Packs' },
    { href: '#', label: 'Templates' },
    { href: '#', label: 'Pricing' },
  ];

  if (!isMounted) {
    return <div className="h-14"></div>; // Placeholder to prevent layout shift during mount
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
        {/* Logo and Desktop Nav */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-foreground">
              <path d="M6.09375 3.75L2.0625 12L6.09375 20.25H9.9375L13.9688 12L9.9375 3.75H6.09375ZM11.0312 3.75L15.0625 12L11.0312 20.25H14.875L18.9062 12L14.875 3.75H11.0312Z" />
            </svg>
            <span className="font-bold text-lg text-foreground">Aceternity UI</span>
            <Badge variant="default" className="bg-primary text-primary-foreground h-5 text-xs">pro</Badge>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav Trigger */}
        <div className="flex flex-1 items-center justify-start space-x-2 md:hidden">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="px-1.5 text-base hover:bg-accent focus-visible:bg-accent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-background text-foreground w-[280px] sm:w-[320px]">
              <Link href="/" className="mb-6 flex items-center space-x-2 pl-5 pt-2">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-primary">
                    <path d="M6.09375 3.75L2.0625 12L6.09375 20.25H9.9375L13.9688 12L9.9375 3.75H6.09375ZM11.0312 3.75L15.0625 12L11.0312 20.25H14.875L18.9062 12L14.875 3.75H11.0312Z" />
                </svg>
                <span className="font-bold text-lg text-primary">Aceternity UI</span>
                 <Badge variant="default" className="bg-primary text-primary-foreground h-5 text-xs">pro</Badge>
              </Link>
              <div className="space-y-2 pl-5 pr-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                 <Link
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    Login
                  </Link>
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90 mt-2">Get All-Access</Button>
              </div>
            </SheetContent>
          </Sheet>
           <Link href="/" className="flex items-center space-x-2 md:hidden -ml-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-foreground">
               <path d="M6.09375 3.75L2.0625 12L6.09375 20.25H9.9375L13.9688 12L9.9375 3.75H6.09375ZM11.0312 3.75L15.0625 12L11.0312 20.25H14.875L18.9062 12L14.875 3.75H11.0312Z" />
            </svg>
            <span className="font-bold text-lg text-foreground">Aceternity UI</span>
           </Link>
        </div>

        {/* Right side icons and buttons */}
        <div className="flex flex-1 items-center justify-end space-x-1.5 sm:space-x-3">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="text-foreground/70 hover:text-foreground hover:bg-accent/80">
            <Moon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Search" className="text-foreground/70 hover:text-foreground hover:bg-accent/80">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="text-foreground/70 hover:text-foreground hover:bg-accent/80">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Link
            href="#"
            className="hidden sm:inline-block text-sm font-medium text-foreground/70 transition-colors hover:text-foreground px-2"
          >
            Login
          </Link>
          <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-lg text-sm px-3 sm:px-4 py-1.5 h-auto">
            Get All-Access
          </Button>
        </div>
      </div>
    </nav>
  );
}
