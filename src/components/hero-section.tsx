
"use client";

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code, Palette } from 'lucide-react';

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

        {/* Row 6: Work Experience Section */}
        <div className="w-full mt-10 md:mt-12">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-8 text-center md:text-left">
            Work Experience
          </h2>
          <div className="flow-root">
            <ul className="-mb-8">

              {/* Experience 1: Web Developer */}
              <li>
                <div className="relative pb-8">
                  <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-border" aria-hidden="true"></span>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                        <Code className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 bg-card border border-border rounded-lg p-6 shadow-md">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Web Developer</h3>
                        <p className="text-md text-accent">Tung Tung JSC</p>
                        <p className="text-sm text-muted-foreground mt-1">Full-time | 2020 – 2022</p>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1.5 mt-4 mb-4 text-sm">
                        <li>Built a scalable design system for consistency and efficiency.</li>
                        <li>Built a complex rich-text editor based on ProseMirror and Slate for customizable content creation.</li>
                        <li>Integrated APIs with the Backend Team to enhance functionality.</li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Redux</Badge>
                        <Badge variant="secondary">Storybook</Badge>
                        <Badge variant="secondary">Lerna</Badge>
                        <Badge variant="secondary">Agile</Badge>
                        <Badge variant="secondary">Teamwork</Badge>
                        <Badge variant="secondary">Research</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Experience 2: Mobile Developer */}
              <li>
                <div className="relative pb-8">
                  <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-border" aria-hidden="true"></span>
                  <div className="relative flex items-start space-x-4">
                     <div className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                        <Code className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 bg-card border border-border rounded-lg p-6 shadow-md">
                       <div>
                        <h3 className="text-xl font-semibold text-foreground">Mobile Developer</h3>
                        <p className="text-md text-accent">Tung Tung JSC</p>
                        <p className="text-sm text-muted-foreground mt-1">Full-time | 2019 – 2020</p>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1.5 mt-4 mb-4 text-sm">
                        <li>Rebuilt the app with React Native for better UX and performance.</li>
                        <li>Integrated MoMo and in-app purchases for seamless payments.</li>
                        <li>Optimized deployment for staging and production.</li>
                        <li>Published on App Store and Google Play, ensuring compliance.</li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React Native</Badge>
                        <Badge variant="secondary">Redux</Badge>
                        <Badge variant="secondary">MoMo Payment API</Badge>
                        <Badge variant="secondary">App Store</Badge>
                        <Badge variant="secondary">Google Play Store</Badge>
                        <Badge variant="secondary">App Center</Badge>
                        <Badge variant="secondary">Agile</Badge>
                        <Badge variant="secondary">Teamwork</Badge>
                        <Badge variant="secondary">Research</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Experience 3: UI/UX Designer */}
              <li>
                <div className="relative"> {/* Removed pb-8 for the last item */}
                  {/* No connecting line span for the last item */}
                  <div className="relative flex items-start space-x-4">
                     <div className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                        <Palette className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 bg-card border border-border rounded-lg p-6 shadow-md">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">UI/UX Designer</h3>
                        <p className="text-md text-accent">Tung Tung JSC</p>
                        <p className="text-sm text-muted-foreground mt-1">Full-time | 2018 – 2019</p>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1.5 mt-4 mb-4 text-sm">
                        <li>Designed a Landing Page for enterprise clients.</li>
                        <li>Redesigned the Online Quiz Platform for a modern look on web and mobile.</li>
                        <li>Redesigned the Pricing interface for individual customers.</li>
                        <li>Enhanced UX by improving usability, navigation, and user flow.</li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">UI/UX Design</Badge>
                        <Badge variant="secondary">Sketch</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
