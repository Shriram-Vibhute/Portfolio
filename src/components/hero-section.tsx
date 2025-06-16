
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Linkedin } from 'lucide-react';

interface HeroSectionProps {
  badgeText: string;
  greeting: string;
  namePart1: string;
  namePart1Color?: string; 
  namePart2: string;
  namePart2Color?: string;
  availabilityText: string;
  introParagraph: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  profileImageUrl: string;
  profileImageAlt: string;
}

export default function HeroSection({
  badgeText,
  greeting,
  namePart1,
  namePart1Color = 'text-pink-500',
  namePart2,
  namePart2Color = 'text-orange-500',
  availabilityText,
  introParagraph,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  profileImageUrl,
  profileImageAlt,
}: HeroSectionProps) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background p-4 sm:p-8 selection:bg-accent selection:text-accent-foreground">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Text Content Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 md:w-3/5 lg:w-1/2">
          <Badge variant="outline" className="text-sm py-1 px-3 border-primary text-primary bg-primary/10">
            {badgeText}
          </Badge>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
            {greeting}{' '}
            <span className={namePart1Color}>{namePart1}</span>{' '}
            <span className={namePart2Color}>{namePart2}</span>
            <span role="img" aria-label="waving hand" className="ml-2 inline-block">👋</span>
          </h1>

          <div className="flex items-center space-x-2 text-foreground/80">
            <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span>{availabilityText}</span>
          </div>

          <p className="font-body text-base sm:text-lg text-foreground/70 leading-relaxed">
            {introParagraph}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 w-full sm:w-auto">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <a href={primaryButtonLink}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-foreground/80 hover:text-accent hover:bg-accent/10 font-medium text-base px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto"
            >
              <a href={secondaryButtonLink} target="_blank" rel="noopener noreferrer">
                {secondaryButtonText}
                <Linkedin className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Image Column */}
        <div className="md:w-2/5 lg:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={profileImageUrl}
              alt={profileImageAlt}
              width={384}
              height={384}
              className="rounded-lg object-contain shadow-xl"
              priority
              data-ai-hint="pixel art avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
