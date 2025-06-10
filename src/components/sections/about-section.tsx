
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import AlternativeTextGenerator from '@/components/ai/alternative-text-generator';
import { CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function AboutSection() {
  const [title, setTitle] = useState("About Sectionize");
  const [description, setDescription] = useState(
    "We believe in the power of well-crafted content. Sectionize empowers you to create compelling narratives with intuitive tools and AI-powered suggestions, ensuring your message resonates deeply with your audience. Our mission is to simplify complexity and amplify creativity."
  );
  const [imageUrl] = useState("https://placehold.co/800x600.png");
  const { toast } = useToast();

  const features = [
    "Intuitive drag-and-drop interface (conceptual)",
    "AI-powered content suggestions",
    "Responsive design for all devices",
    "Seamless integration capabilities (conceptual)"
  ];

  const handleSuggestionSelect = (heading?: string, tagline?: string) => {
    let updated = false;
    if (heading) {
      setTitle(heading);
      updated = true;
    }
    if (tagline) {
      // Replace the last sentence or append if no period.
      const sentences = description.split('. ');
      if (sentences.length > 1) {
        sentences[sentences.length -1] = tagline + (tagline.endsWith('.') ? '' : '.');
        setDescription(sentences.join('. '));
      } else {
        setDescription(description + ' ' + tagline + (tagline.endsWith('.') ? '' : '.'));
      }
      updated = true;
    }
     if (updated) {
      toast({
        title: "Content Updated",
        description: "About section text has been updated with AI suggestion.",
      });
    }
  };


  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {imageUrl && (
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-video md:aspect-[4/3]">
              <Image
                src={imageUrl}
                alt="Team collaborating on a project"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                data-ai-hint="teamwork office"
              />
            </div>
          )}
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <ul className="space-y-3 mt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>
            <AlternativeTextGenerator
              sectionType="about"
              currentHeading={title}
              currentDescription={description}
              onSuggestionSelect={handleSuggestionSelect}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
