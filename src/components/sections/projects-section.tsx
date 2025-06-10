
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
    imageUrl: 'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxvbmxpbmUlMjBzdG9yZXxlbnwwfHx8fDE3NDk1NjQyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'online store',
    liveLink: '#',
    codeLink: '#',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'AI Article Summarizer',
    description: 'An application that uses Genkit AI to summarize long articles into concise overviews. Features a clean interface and quick processing.',
    imageUrl: 'https://images.unsplash.com/photo-1496942299866-9e7ab403e614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc0OTU2NDI1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'artificial intelligence',
    liveLink: '#',
    codeLink: '#',
    tags: ['Genkit', 'React', 'AI/ML', 'Node.js'],
  },
  {
    id: '3',
    title: 'Portfolio Website V2',
    description: 'The very website you are browsing! A personal portfolio showcasing projects and skills, built with Next.js and ShadCN UI components.',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxkZXZlbG9wZXIlMjBwb3J0Zm9saW98ZW58MHx8fHwxNzQ5NTY0MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'developer portfolio',
    liveLink: '#',
    codeLink: '#',
    tags: ['Next.js', 'ShadCN UI', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: '4',
    title: 'Interactive Data Dashboard',
    description: 'A web application for visualizing complex datasets with interactive charts and filters. Built using React and Recharts.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data charts',
    liveLink: '#',
    codeLink: '#',
    tags: ['React', 'Recharts', 'Data Visualization', 'JavaScript'],
  },
  {
    id: '5',
    title: 'Task Management App',
    description: 'A collaborative task management tool with features like boards, lists, and cards, similar to Trello. Firebase backend.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task board',
    liveLink: '#',
    codeLink: '#',
    tags: ['React', 'Firebase', 'Productivity', 'Real-time'],
  },
  {
    id: '6',
    title: 'Weather Forecast App',
    description: 'A clean and simple weather application that provides current weather and forecasts using a third-party API.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'weather forecast',
    liveLink: '#',
    codeLink: '#',
    tags: ['JavaScript', 'API Integration', 'Weather', 'UI/UX'],
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
              <CardBody className="bg-black/70 backdrop-blur-md relative group/card hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-emerald-500/[0.1] border-neutral-700/50 w-full h-auto rounded-xl p-6 border">
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

