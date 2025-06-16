
"use client";

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  badgeText: string;
  greeting: string;
  namePart1: string;
  namePart1Color?: string;
  namePart2: string;
  namePart2Color?: string;
  availabilityText: string;
  introParagraph: string;
}

export default function HeroSection({
  badgeText,
  greeting,
  namePart1,
  namePart1Color = 'text-pink-500',
  namePart2,
  namePart2Color = 'text-yellow-500',
  availabilityText,
  introParagraph,
}: HeroSectionProps) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background p-4 sm:p-8 selection:bg-accent selection:text-accent-foreground">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center gap-6 md:gap-8">
        {/* Text Content Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 md:w-full">
          <Badge variant="secondary" className="text-sm py-1 px-3">
            {badgeText}
          </Badge>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
            <div>{greeting}</div>
            <div style={{ whiteSpace: 'nowrap' }}>
              <span className={namePart1Color}>{namePart1}</span>{' '}
              <span className={namePart2Color}>{namePart2}</span>
              <motion.span
                className="ml-1 inline-block"
                aria-label="waving hand"
                animate={{ rotate: [0, 15, -10, 15, 0, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3.5,
                  ease: "easeInOut",
                }}
              >
                👋🏻
              </motion.span>
            </div>
          </h1>

          <div className="flex items-center space-x-2 text-foreground/80">
            <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span>{availabilityText}</span>
          </div>

          <p className="font-body text-xl text-muted-foreground leading-relaxed hero-intro-text-animation">
            {introParagraph}
          </p>

          {/* Skills Section */}
          <div className="mt-6 md:mt-8 w-full">
            <h2 className="text-2xl font-headline font-semibold text-foreground mb-4 text-center md:text-left">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">TensorFlow</Badge>
              <Badge variant="secondary">PyTorch</Badge>
              <Badge variant="secondary">Scikit-learn</Badge>
              <Badge variant="secondary">Genkit</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Docker</Badge>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
