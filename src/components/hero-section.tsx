
"use client";

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, GitFork, Mail, Download } from 'lucide-react'; // Added Mail and Download
import BentoGridDemo from '@/components/bento-grid-demo';
import { Button } from '@/components/ui/button'; // Added Button import

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

        {/* Buttons after Intro Paragraph */}
        <div className="w-full flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mt-6 md:mt-8">
          <Button
            className="bg-white text-gray-900 hover:bg-gray-200 shadow-md"
            asChild
          >
            <a href="mailto:shriram.vibhute@example.com"> {/* Replace with actual email */}
              <Mail className="mr-2 h-4 w-4" /> Mail Me
            </a>
          </Button>
          <Button
            className="bg-gray-900 text-white hover:bg-gray-700 shadow-md"
            asChild
          >
            <a href="/resume.pdf" download> {/* Place resume.pdf in /public folder */}
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>

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
        
        {/* Row 6: Experience Section */}
        <div className="w-full mt-10 md:mt-12">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-8 text-center md:text-left">
            Experience
          </h2>
          <div className="space-y-6">
            {/* Skill & technology Card */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start gap-5 cursor-pointer">
              <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                <Code2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Skill & technology</h3>
                <p className="text-sm text-muted-foreground">
                  The knowledge I've gained through years of experience in technology.
                </p>
              </div>
            </div>

            {/* Journey Card */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start gap-5 cursor-pointer">
              <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                <GitFork className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Journey</h3>
                <p className="text-sm text-muted-foreground">
                  My path to becoming a software engineer. Experiences and Learnings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kaggle Notebooks Section */}
        <div className="w-full mt-10 md:mt-12">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center md:text-left">
            Kaggle Notebooks
          </h2>
          <BentoGridDemo />
        </div>
        
        {/* Row 7: Blogs Section */}
        <div className="w-full mt-10 md:mt-12 pb-20"> {/* Increased pb for more space at bottom */}
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center md:text-left">
            Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blog Card 1 */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-md flex flex-col">
              <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Blog Post 1 Placeholder" 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint="writing desk"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Deep Dive into LLMs</h3>
              <p className="text-sm text-muted-foreground flex-grow">
                Exploring the architecture and capabilities of modern Large Language Models and their impact on AI.
              </p>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-md flex flex-col">
              <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Blog Post 2 Placeholder" 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint="code editor"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Frontend Frameworks Compared</h3>
              <p className="text-sm text-muted-foreground flex-grow">
                A comparative analysis of React, Vue, and Next.js for building interactive web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

