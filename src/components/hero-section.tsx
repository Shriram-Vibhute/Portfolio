
"use client";

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  badgeText: string;
  greeting: string;
  namePart1: string;
  namePart1Color?: string;
  namePart2: string;
  namePart2Color?: string;
  availabilityText: string;
  introParagraph: string;
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
  profileImageUrl,
  profileImageAlt,
}: HeroSectionProps) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background p-4 sm:p-8 selection:bg-accent selection:text-accent-foreground">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        {/* Text Content Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 md:w-3/5 lg:w-1/2">
          <Badge variant="outline" className="text-sm py-1 px-3 border-primary text-primary bg-primary/10">
            {badgeText}
          </Badge>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
            <div>{greeting}</div>
            <div>
              <span className={namePart1Color}>{namePart1}</span>{' '}
              <span className={namePart2Color}>{namePart2}</span>
              <span role="img" aria-label="waving hand" className="ml-2 inline-block">👋</span>
            </div>
          </h1>

          <div className="flex items-center space-x-2 text-foreground/80">
            <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span>{availabilityText}</span>
          </div>

          <p className="font-body text-base sm:text-lg text-foreground/70 leading-relaxed">
            {introParagraph}
          </p>
        </div>

        {/* Image Column */}
        <div className="md:w-2/5 lg:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
            <Image
              src={profileImageUrl}
              alt={profileImageAlt}
              width={288}
              height={288}
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
