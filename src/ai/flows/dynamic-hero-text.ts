'use server';

/**
 * @fileOverview AI-powered dynamic text generation for the hero section of a portfolio.
 *
 * - generateDynamicHeroText - A function that generates dynamic hero text based on project keywords.
 * - DynamicHeroTextInput - The input type for the generateDynamicHeroText function.
 * - DynamicHeroTextOutput - The return type for the generateDynamicHeroText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicHeroTextInputSchema = z.object({
  latestProjectsKeywords: z
    .string()
    .describe('Keywords extracted from the user\'s latest projects.'),
  currentHeroText: z.string().describe('The current hero section text.'),
});
export type DynamicHeroTextInput = z.infer<typeof DynamicHeroTextInputSchema>;

const DynamicHeroTextOutputSchema = z.object({
  dynamicHeroText: z
    .string()
    .describe('The dynamically adjusted hero section text.'),
});
export type DynamicHeroTextOutput = z.infer<typeof DynamicHeroTextOutputSchema>;

export async function generateDynamicHeroText(
  input: DynamicHeroTextInput
): Promise<DynamicHeroTextOutput> {
  return dynamicHeroTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dynamicHeroTextPrompt',
  input: {schema: DynamicHeroTextInputSchema},
  output: {schema: DynamicHeroTextOutputSchema},
  prompt: `You are a marketing expert specializing in creating engaging hero section text for online portfolios.

You will be provided with keywords extracted from the portfolio owner\'s latest projects and the current hero section text.

Your task is to dynamically adjust the hero section text to incorporate the latest project keywords, making it fresh, SEO-friendly, and relevant to their current work.

Ensure that the adjusted text is concise, compelling, and accurately reflects the portfolio owner\'s expertise.

Latest Project Keywords: {{{latestProjectsKeywords}}}
Current Hero Text: {{{currentHeroText}}}

Dynamically Adjusted Hero Text:`,
});

const dynamicHeroTextFlow = ai.defineFlow(
  {
    name: 'dynamicHeroTextFlow',
    inputSchema: DynamicHeroTextInputSchema,
    outputSchema: DynamicHeroTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
