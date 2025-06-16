
"use client";

import { useState, useEffect, type ElementType } from 'react';
import { generateDynamicHeroText } from '@/ai/flows/dynamic-hero-text';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, Github, Linkedin, Twitter, type LucideIcon } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  iconName: string; // Changed from icon: ElementType
}

interface HeroSectionProps {
  name: string;
  title: string;
  defaultIntro: string;
  projectKeywords: string;
  socialLinks: SocialLink[];
  contactLink: string;
}

const iconComponents: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export default function HeroSection({
  name,
  title,
  defaultIntro,
  projectKeywords,
  socialLinks,
  contactLink,
}: HeroSectionProps) {
  const [dynamicIntro, setDynamicIntro] = useState(defaultIntro);
  const [isLoadingIntro, setIsLoadingIntro] = useState(true);
  const [textKey, setTextKey] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchIntro() {
      setIsLoadingIntro(true);
      try {
        const result = await generateDynamicHeroText({
          latestProjectsKeywords: projectKeywords,
          currentHeroText: defaultIntro,
        });
        setDynamicIntro(result.dynamicHeroText);
        setTextKey(prev => prev + 1); 
      } catch (error) {
        console.error("Failed to generate dynamic hero text:", error);
        setDynamicIntro(defaultIntro); // Fallback to default
        toast({
          title: "Content Update Error",
          description: "Could not fetch AI-powered introduction. Displaying default text.",
          variant: "destructive",
        });
      } finally {
        setIsLoadingIntro(false);
      }
    }
    fetchIntro();
  }, [projectKeywords, defaultIntro, toast]);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background p-4 sm:p-8 selection:bg-accent selection:text-accent-foreground">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary drop-shadow-sm">
            {name}
          </h1>
          <p className="font-headline text-xl sm:text-2xl text-foreground/80 mt-3">
            {title}
          </p>
        </div>

        {isLoadingIntro ? (
          <div className="h-20 flex flex-col items-center justify-center space-y-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="font-body text-foreground/60">Crafting your unique introduction...</p>
          </div>
        ) : (
          <p 
            key={textKey} 
            className="font-body text-lg sm:text-xl text-foreground/70 leading-relaxed animate-fade-in-text-hero"
            style={{ animationDelay: '0.1s' }} // slight delay for effect
          >
            {dynamicIntro}
          </p>
        )}

        <div className="flex justify-center items-center space-x-4 pt-4">
          {socialLinks.map((link) => {
            const IconComponent = iconComponents[link.iconName];
            return (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className="text-foreground/70 hover:text-accent hover:bg-accent/10 rounded-full transition-colors duration-300"
                aria-label={`Visit ${link.name} profile`}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {IconComponent ? <IconComponent className="w-6 h-6" /> : null}
                </a>
              </Button>
            );
          })}
        </div>

        <div className="pt-4">
          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-headline text-lg px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <a href={contactLink}>
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
