
"use client";

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MoveRight, MoveLeft, MoveDown } from 'lucide-react';

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

        {/* Row 5: Certifications Section (Wider) */}
        <div className="w-full mt-10 md:mt-12">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center md:text-left">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certification Card 1 */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-md flex flex-col">
              <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Certification 1 Placeholder" 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint="certificate document"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Advanced AI Specialization</h3>
              <p className="text-sm text-muted-foreground flex-grow">
                Issued by Coursera
              </p>
            </div>

            {/* Certification Card 2 */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-md flex flex-col">
              <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Certification 2 Placeholder" 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint="tech achievement"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Cloud Certified Professional</h3>
              <p className="text-sm text-muted-foreground flex-grow">
                Issued by Google Cloud
              </p>
            </div>
          </div>
        </div>

        {/* Row 6: My Data Science Journey Section */}
        <div className="w-full mt-10 md:mt-12">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center md:text-left">
            My Data Science Journey
          </h2>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-y-8 md:gap-y-12 md:gap-x-4 items-center">

              {/* Stage 1: Mathematics Node */}
              <div className="flex justify-center md:justify-self-start">
                <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg shadow-md w-full max-w-xs text-center">
                  <h3 className="text-lg font-semibold text-primary">1. Mathematics</h3>
                  <p className="text-sm text-primary/80 mt-1">Calculus, Linear Algebra, Statistics</p>
                </div>
              </div>

              {/* Arrow Math -> ML */}
              <div className="flex justify-center items-center">
                <MoveRight className="w-10 h-10 text-accent md:w-12 md:h-12" />
              </div>

              {/* Stage 2: Machine Learning Node */}
              <div className="flex justify-center md:justify-self-end">
                <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg shadow-md w-full max-w-xs text-center">
                  <h3 className="text-lg font-semibold text-primary">2. Machine Learning</h3>
                  <p className="text-sm text-primary/80 mt-1">Algorithms, Model Training</p>
                </div>
              </div>

              {/* Connecting Arrow for ML -> DL */}
              {/* Mobile: simple down arrow */}
              <div className="flex justify-center items-center md:hidden">
                <MoveDown className="w-10 h-10 text-accent" />
              </div>
              {/* Desktop: This spans the middle column of the top item row, to point to the start of next item row */}
              {/* This element will be in the grid, effectively between rows, under the ML->DL arrow space */}
              <div className="hidden md:flex md:col-start-3 md:row-start-2 justify-center items-center py-4"> {/* Adjusted to be in its own "row" segment of the grid */}
                <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-accent"></div> {/* Vertical line segment */}
                    <MoveLeft className="w-8 h-8 text-accent transform -rotate-0" /> {/* Arrow pointing left */}
                    <div className="w-px h-6 bg-accent"></div> {/* Vertical line segment */}
                </div>
              </div>
              {/* Empty spacers for desktop grid alignment for the arrow above */}
               <div className="hidden md:block md:row-start-2 md:col-start-1"></div>
               <div className="hidden md:block md:row-start-2 md:col-start-2"></div>


              {/* Stage 3: Deep Learning Node */}
              <div className="md:row-start-3 flex justify-center md:justify-self-start">
                <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg shadow-md w-full max-w-xs text-center">
                  <h3 className="text-lg font-semibold text-primary">3. Deep Learning</h3>
                  <p className="text-sm text-primary/80 mt-1">Neural Networks, CNNs, RNNs</p>
                </div>
              </div>

              {/* Arrow DL -> GenAI */}
              <div className="md:row-start-3 flex justify-center items-center">
                <MoveRight className="w-10 h-10 text-accent md:w-12 md:h-12" />
              </div>

              {/* Stage 4: Generative AI Node */}
              <div className="md:row-start-3 flex justify-center md:justify-self-end">
                <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg shadow-md w-full max-w-xs text-center">
                  <h3 className="text-lg font-semibold text-primary">4. Generative AI</h3>
                  <p className="text-sm text-primary/80 mt-1">GANs, VAEs, LLMs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

