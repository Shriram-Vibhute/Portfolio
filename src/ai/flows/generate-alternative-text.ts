// use server'
'use server';

/**
 * @fileOverview Generates alternative headings and taglines for hero and about sections using AI.
 *
 * - generateAlternativeText - A function that generates alternative text suggestions.
 * - GenerateAlternativeTextInput - The input type for the generateAlternativeText function.
 * - GenerateAlternativeTextOutput - The return type for the generateAlternativeText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAlternativeTextInputSchema = z.object({
  sectionType: z.enum(['hero', 'about']).describe('The type of section to generate alternative text for.'),
  mainHeading: z.string().describe('The main heading of the section.'),
  description: z.string().describe('The description of the section.'),
});
export type GenerateAlternativeTextInput = z.infer<
  typeof GenerateAlternativeTextInputSchema
>;

const GenerateAlternativeTextOutputSchema = z.object({
  alternativeHeadings: z.array(z.string()).describe('Alternative headings for the section.'),
  alternativeTaglines: z.array(z.string()).describe('Alternative taglines for the section.'),
});
export type GenerateAlternativeTextOutput = z.infer<
  typeof GenerateAlternativeTextOutputSchema
>;

export async function generateAlternativeText(
  input: GenerateAlternativeTextInput
): Promise<GenerateAlternativeTextOutput> {
  return generateAlternativeTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAlternativeTextPrompt',
  input: {schema: GenerateAlternativeTextInputSchema},
  output: {schema: GenerateAlternativeTextOutputSchema},
  prompt: `You are a creative copywriter specializing in generating engaging headings and taglines for websites.

  Based on the following section type, main heading, and description, generate 3 alternative headings and 3 alternative taglines. 
  Return the alternatives in JSON format.

  Section Type: {{{sectionType}}}
  Main Heading: {{{mainHeading}}}
  Description: {{{description}}}

  Output should be a JSON as follows:
  {
    "alternativeHeadings": ["heading 1", "heading 2", "heading 3"],
    "alternativeTaglines": ["tagline 1", "tagline 2", "tagline 3"]
  }`,
});

const generateAlternativeTextFlow = ai.defineFlow(
  {
    name: 'generateAlternativeTextFlow',
    inputSchema: GenerateAlternativeTextInputSchema,
    outputSchema: GenerateAlternativeTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
