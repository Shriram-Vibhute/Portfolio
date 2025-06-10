
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AlternativeTextGenerator from '@/components/ai/alternative-text-generator';
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const [title, setTitle] = useState("Welcome to Sectionize");
  const [subtitle, setSubtitle] = useState("Crafting beautiful sections, effortlessly with AI.");
  const [imageUrl] = useState("https://placehold.co/1200x600.png");
  const { toast } = useToast();

  const handleSuggestionSelect = (heading?: string, tagline?: string) => {
    let updated = false;
    if (heading) {
      setTitle(heading);
      updated = true;
    }
    if (tagline) {
      setSubtitle(tagline);
      updated = true;
    }
    if (updated) {
      toast({
        title: "Content Updated",
        description: "Hero section text has been updated with AI suggestion.",
      });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="shadow-md hover:shadow-lg transition-shadow">Get Started</Button>
              <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow">Learn More</Button>
            </div>
             <AlternativeTextGenerator
              sectionType="hero"
              currentHeading={title}
              currentDescription={subtitle}
              onSuggestionSelect={handleSuggestionSelect}
            />
          </div>
          {imageUrl && (
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-[2/1] md:aspect-auto">
              <Image
                src={imageUrl}
                alt="Abstract representation of section building"
                width={1200}
                height={600}
                className="w-full h-full object-cover"
                priority
                data-ai-hint="technology abstract"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
