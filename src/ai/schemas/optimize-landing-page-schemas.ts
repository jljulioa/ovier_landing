
/**
 * @fileOverview Zod schemas and TypeScript types for landing page optimization.
 *
 * - OptimizeLandingPageInputSchema - The Zod schema for the landing page optimization input.
 * - OptimizeLandingPageInput - The TypeScript type inferred from OptimizeLandingPageInputSchema.
 * - OptimizeLandingPageOutputSchema - The Zod schema for the landing page optimization output.
 * - OptimizeLandingPageOutput - The TypeScript type inferred from OptimizeLandingPageOutputSchema.
 */

import { z } from 'zod';

export const OptimizeLandingPageInputSchema = z.object({
  headline: z.string().describe('The current headline of the landing page.'),
  valueProposition: z.string().describe('The current value proposition of the landing page.'),
  callToAction: z.string().describe('The current call to action of the landing page.'),
  featuresOverview: z.string().describe('The overview of key features on the landing page'),
  socialProof: z.string().describe('Customer testimonials and social proof elements'),
  targetAudience: z.string().describe('The target audience for this landing page'),
});

export type OptimizeLandingPageInput = z.infer<typeof OptimizeLandingPageInputSchema>;

export const OptimizeLandingPageOutputSchema = z.object({
  optimizedHeadline: z.string().describe('The improved headline for the landing page.'),
  optimizedValueProposition: z
    .string()
    .describe('The improved value proposition for the landing page.'),
  optimizedCallToAction: z.string().describe('The improved call to action for the landing page.'),
  suggestions: z
    .string()
    .describe('Additional suggestions to improve other sections of the landing page.'),
});

export type OptimizeLandingPageOutput = z.infer<typeof OptimizeLandingPageOutputSchema>;
