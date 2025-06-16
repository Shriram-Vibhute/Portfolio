
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, GitFork, Mail, Download, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  badgeText: string;
  greeting: string;
  namePart1: string;
  namePart2: string;
  availabilityText: string;
  introParagraph: string;
  profileImageUrl: string;
  profileImageAlt: string;
}

export default function HeroSection({
  badgeText,
  greeting,
  namePart1,
  namePart2,
  availabilityText,
  introParagraph,
  profileImageUrl,
  profileImageAlt,
}: HeroSectionProps) {
  const keywords = ["Data Science", "Machine Learning", "Deep Learning", "MLOps"];

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-transparent p-4 sm:p-8">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center md:items-start gap-8 md:gap-10">

        {/* Row 1: Name/Greeting/Badge/Availability + Image */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
          {/* Left Part: Text (Badge, Greeting, Name, Availability) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 order-2 md:order-1 md:flex-grow">
            <div className="inline-block text-white text-sm py-1 px-3 relative pb-1">
              {badgeText}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-400 via-purple-400 via-yellow-300 to-cyan-400"></span>
            </div>
            
            <h1 className="font-headline text-foreground">
              <div className="text-5xl">{greeting}</div>
              <div className="text-4xl sm:text-5xl md:text-6xl" style={{ whiteSpace: 'nowrap' }}>
                <span className="font-bold bg-gradient-to-r from-pink-400 via-purple-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent">
                  {namePart1} {namePart2}
                </span>
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
                className="rounded-full shadow-2xl border-4 border-background dark:border-zinc-800"
                data-ai-hint="profile portrait"
                priority
              />
            </div>
          </div>
        </div>

        {/* Combined Keywords, Intro, and Buttons Section */}
        <div className="w-full flex flex-col items-center md:items-start space-y-4">
          {/* Keywords Section */}
          <div className="w-full flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2">
            {keywords.map((keyword) => (
              <span 
                key={keyword} 
                className="inline-flex items-center justify-center rounded-md text-[0.70rem] font-light py-[0.3rem] px-[0.9rem] bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>

          <p className="font-body text-base text-muted-foreground leading-relaxed hero-intro-text-animation w-full text-center md:text-left">
            {introParagraph}
          </p>
          <div className="w-full flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
            <Button
              className={cn(
                "button-custom-style",
                "bg-white text-black hover:bg-gray-100",
                "border border-gray-300 shadow-lg" 
              )}
              asChild
            >
              <a href="mailto:shriram.vibhute@example.com"> 
                <Mail className="mr-2 h-4 w-4" /> Mail
              </a>
            </Button>
            <Button
              className={cn(
                "button-custom-style",
                "bg-zinc-900/70 dark:bg-zinc-800/60 text-primary-foreground hover:bg-zinc-900/80 dark:hover:bg-zinc-800/70",
                "backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-lg"
              )}
              asChild
            >
              <a href="/resume.pdf" download> 
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Row 3: Skills Section (Wider) */}
        <div className="w-full mt-10 md:mt-12">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-4 text-center md:text-left">
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">Python</span>
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">JavaScript</span>
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">TypeScript</span>
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">React</span>
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">Next.js</span>
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">Node.js</span>
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">TensorFlow</span>
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">PyTorch</span>
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">Scikit-learn</span>
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">Genkit</span>
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">Tailwind CSS</span>
            <span className="inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-white/30 dark:bg-white/20 text-foreground hover:bg-white/40 dark:hover:bg-white/30 backdrop-blur-sm border border-white/40 dark:border-white/30 shadow-lg transition-colors">Docker</span>
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
                <span className="inline-flex items-center rounded-full border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">Next.js</span>
                <span className="inline-flex items-center rounded-full border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">TypeScript</span>
                <span className="inline-flex items-center rounded-full border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">Tailwind</span>
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
                <span className="inline-flex items-center rounded-full border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">React</span>
                <span className="inline-flex items-center rounded-full border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">Genkit</span>
                <span className="inline-flex items-center rounded-full border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">Firebase</span>
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

        {/* Education Section */}
        <div className="w-full mt-10 md:mt-12">
          <h2 className="text-2xl font-headline font-semibold text-foreground mb-8 text-center md:text-left">
            Education
          </h2>
          <div className="space-y-6">
            {/* Education Item 1 */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start gap-5 cursor-pointer">
              <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Master of Science in Data Science</h3>
                <p className="text-sm text-muted-foreground">
                  Stanford University | 2020 - 2022
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Specialized in Machine Learning and Statistical Modeling.
                </p>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start gap-5 cursor-pointer">
              <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Bachelor of Engineering in Computer Science</h3>
                <p className="text-sm text-muted-foreground">
                  MIT (Massachusetts Institute of Technology) | 2016 - 2020
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Graduated with honors, focus on AI and Software Development.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Experience Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kaggle Notebook Card 1 */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-md flex flex-col">
              <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Kaggle Notebook 1 Placeholder" 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint="data science"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Notebook Alpha</h3>
              <p className="text-sm text-muted-foreground flex-grow">
                An exploratory data analysis of a complex dataset, revealing key insights and patterns.
              </p>
            </div>

            {/* Kaggle Notebook Card 2 */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-md flex flex-col">
              <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Kaggle Notebook 2 Placeholder" 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint="machine learning"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Notebook Beta</h3>
              <p className="text-sm text-muted-foreground flex-grow">
                Implementation of a machine learning model for predictive analytics, with performance evaluation.
              </p>
            </div>
          </div>
        </div>
        
        {/* Blogs Section */}
        <div className="w-full mt-10 md:mt-12 pb-24"> {/* Increased pb for more space before floating dock */}
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

