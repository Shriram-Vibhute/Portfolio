
"use client";

import React, { useState, useTransition } from 'react';
import type { GenerateAlternativeTextInput, GenerateAlternativeTextOutput } from '@/ai/flows/generate-alternative-text';
import { generateAlternativeText as genTextFlow } from '@/ai/flows/generate-alternative-text';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from "@/hooks/use-toast";

interface AlternativeTextGeneratorProps {
  sectionType: 'hero' | 'about';
  currentHeading: string;
  currentDescription: string;
  onSuggestionSelect: (heading?: string, tagline?: string) => void;
}

export default function AlternativeTextGenerator({
  sectionType,
  currentHeading,
  currentDescription,
  onSuggestionSelect,
}: AlternativeTextGeneratorProps) {
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<GenerateAlternativeTextOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerateSuggestions = async () => {
    setError(null);
    setSuggestions(null);

    startTransition(async () => {
      try {
        const input: GenerateAlternativeTextInput = {
          sectionType,
          mainHeading: currentHeading,
          description: currentDescription,
        };
        const result = await genTextFlow(input);
        setSuggestions(result);
        if (!result.alternativeHeadings.length && !result.alternativeTaglines.length) {
          toast({
            title: "No new suggestions",
            description: "The AI couldn't find different suggestions at this time.",
          });
        }
      } catch (e) {
        console.error("Error generating alternative text:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred while generating suggestions.";
        setError(errorMessage);
        toast({
          variant: "destructive",
          title: "Generation Failed",
          description: errorMessage,
        });
      }
    });
  };

  return (
    <div className="mt-8 space-y-4">
      <Button 
        onClick={handleGenerateSuggestions} 
        disabled={isPending} 
        variant="outline"
        className="border-primary text-primary hover:bg-primary/10"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Suggestions...
          </>
        ) : (
          `Suggest Alternative ${sectionType === 'hero' ? 'Hero' : 'About'} Text`
        )}
      </Button>

      {error && !isPending && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {suggestions && !isPending && (
        <Card className="mt-4 bg-accent text-accent-foreground border-primary/50 shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl">AI Suggestions</CardTitle>
            <CardDescription className="text-accent-foreground/80">
              Click a suggestion to apply it to the current section.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {suggestions.alternativeHeadings.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Alternative Headings:</h4>
                <ul className="space-y-1">
                  {suggestions.alternativeHeadings.map((heading, index) => (
                    <li key={`heading-${index}`}>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-left text-accent-foreground hover:text-primary font-normal"
                        onClick={() => onSuggestionSelect(heading, undefined)}
                      >
                        {heading}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {suggestions.alternativeTaglines.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 mt-3">Alternative Taglines:</h4>
                <ul className="space-y-1">
                  {suggestions.alternativeTaglines.map((tagline, index) => (
                    <li key={`tagline-${index}`}>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-left text-accent-foreground hover:text-primary font-normal"
                        onClick={() => onSuggestionSelect(undefined, tagline)}
                      >
                        {tagline}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
