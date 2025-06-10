
"use client";

import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button }
from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  liveLink?: string;
  codeLink?: string;
  tags: string[];
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product listings, cart functionality, and payment integration. Built with Next.js and Stripe.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    liveLink: '#',
    codeLink: '#',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'AI Article Summarizer',
    description: 'An application that uses Genkit AI to summarize long articles into concise overviews. Features a clean interface and quick processing.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence',
    liveLink: '#',
    codeLink: '#',
    tags: ['Genkit', 'React', 'AI/ML', 'Node.js'],
  },
  {
    id: '3',
    title: 'Portfolio Website V2',
    description: 'The very website you are browsing! A personal portfolio showcasing projects and skills, built with Next.js and ShadCN UI components.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'developer portfolio',
    liveLink: '#',
    codeLink: '#',
    tags: ['Next.js', 'ShadCN UI', 'Tailwind CSS', 'Vercel'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 font-headline tracking-tight">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project) => (
            <CardContainer key={project.id} className="inter-var w-full">
              <CardBody className="bg-card relative group/card hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-border w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-foreground"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-muted-foreground text-sm max-w-sm mt-2"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="80" className="w-full mt-4">
                  <Image
                    src={project.imageUrl}
                    height={400}
                    width={600}
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.title}
                    data-ai-hint={project.imageHint}
                  />
                </CardItem>
                 <CardItem 
                    translateZ="70"
                    className="w-full mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  {project.liveLink && (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-0 py-0" // Reset padding for button styling
                    >
                      <Button variant="link" className="text-primary p-0 h-auto">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Live
                      </Button>
                    </CardItem>
                  )}
                  {project.codeLink && (
                     <CardItem
                      translateZ={20}
                      as="a"
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-0 py-0" // Reset padding for button styling
                    >
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </Button>
                    </CardItem>
                  )}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
