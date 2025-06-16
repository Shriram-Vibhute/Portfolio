
"use client";

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
  namePart2Color = 'text-yellow-500',
  availabilityText,
  introParagraph,
  profileImageUrl,
  profileImageAlt,
}: HeroSectionProps) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background p-4 sm:p-8 selection:bg-accent selection:text-accent-foreground">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center md:items-start gap-8 md:gap-10">

        {/* Row 1: Name/Greeting/Badge/Availability + Image */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
          {/* Left Part: Text (Badge, Greeting, Name, Availability) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 order-2 md:order-1 md:flex-grow">
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
          </div>

          {/* Right Part: Image */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto order-1 md:order-2 flex justify-center md:justify-end shrink-0">
            <div className="relative w-[150px] h-[150px]">
              <Image
                src={profileImageUrl}
                alt={profileImageAlt}
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-2xl border-4 border-background"
                data-ai-hint="profile portrait"
                priority
              />
            </div>
          </div>
        </div>

        {/* Row 2: Intro Paragraph (Wider) */}
        <p className="font-body text-xl text-muted-foreground leading-relaxed hero-intro-text-animation w-full text-center md:text-left">
          {introParagraph}
        </p>

        {/* Row 3: Skills Section (Wider) */}
        <div className="w-full mt-10 md:mt-12">
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

        {/* Row 4: Projects Section (Wider) */}
        <div className="w-full mt-10 md:mt-12">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center md:text-left">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-md flex flex-col">
              <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Project 1 Placeholder" 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint="abstract tech"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Project Alpha</h3>
              <p className="text-sm text-muted-foreground mb-3 flex-grow">
                A cutting-edge solution for an interesting problem, leveraging modern technologies to deliver performance.
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">Next.js</Badge>
                <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                <Badge variant="secondary" className="text-xs">Tailwind</Badge>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-md flex flex-col">
              <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Project 2 Placeholder" 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint="modern workspace"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Service Beta</h3>
              <p className="text-sm text-muted-foreground mb-3 flex-grow">
                An innovative platform designed to streamline user workflows and enhance productivity through AI.
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">React</Badge>
                <Badge variant="secondary" className="text-xs">Genkit</Badge>
                <Badge variant="secondary" className="text-xs">Firebase</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
