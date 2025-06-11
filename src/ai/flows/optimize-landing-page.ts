
'use server';

/**
 * @fileOverview Optimizes landing page content using AI suggestions.
 *
 * - optimizeLandingPage - A function that suggests improvements to the landing page content.
 * - OptimizeLandingPageInput - The input type for the optimizeLandingPage function (imported).
 * - OptimizeLandingPageOutput - The return type for the optimizeLandingPage function (imported).
 */

import {ai} from '@/ai/genkit';
import {
  OptimizeLandingPageInputSchema,
  type OptimizeLandingPageInput,
  OptimizeLandingPageOutputSchema,
  type OptimizeLandingPageOutput,
} from '@/ai/schemas/optimize-landing-page-schemas';

export type { OptimizeLandingPageInput, OptimizeLandingPageOutput };

export async function optimizeLandingPage(input: OptimizeLandingPageInput): Promise<OptimizeLandingPageOutput> {
  return optimizeLandingPageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeLandingPagePrompt',
  input: {schema: OptimizeLandingPageInputSchema},
  output: {schema: OptimizeLandingPageOutputSchema},
  prompt: `You are an expert marketing consultant specializing in landing page optimization.

  Given the current landing page content, suggest improvements to the headline, value proposition, and call to action to increase conversion rates.

  Target Audience: {{{targetAudience}}}

  Current Headline: {{{headline}}}
  Current Value Proposition: {{{valueProposition}}}
  Current Call to Action: {{{callToAction}}}
  Features Overview: {{{featuresOverview}}}
  Social Proof: {{{socialProof}}}

  Provide an optimized headline, an optimized value proposition, and an optimized call to action. In addition, provide specific suggestions to improve the features overview and social proof sections to maximize conversions.
  `,
});

const optimizeLandingPageFlow = ai.defineFlow(
  {
    name: 'optimizeLandingPageFlow',
    inputSchema: OptimizeLandingPageInputSchema,
    outputSchema: OptimizeLandingPageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
