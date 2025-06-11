
"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { optimizeLandingPage } from '@/ai/flows/optimize-landing-page';
import { OptimizeLandingPageInputSchema, type OptimizeLandingPageInput, type OptimizeLandingPageOutput } from '@/ai/schemas/optimize-landing-page-schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function OptimizationTool() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiResult, setAiResult] = useState<OptimizeLandingPageOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<OptimizeLandingPageInput>({
    resolver: zodResolver(OptimizeLandingPageInputSchema),
    defaultValues: {
      headline: '',
      valueProposition: '',
      callToAction: '',
      featuresOverview: '',
      socialProof: '',
      targetAudience: '',
    },
  });

  const onSubmit: SubmitHandler<OptimizeLandingPageInput> = async (data) => {
    setIsLoading(true);
    setAiResult(null);
    setError(null);
    try {
      const result = await optimizeLandingPage(data);
      setAiResult(result);
      toast({
        title: "Optimization Complete!",
        description: "AI suggestions have been generated.",
      });
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
      setError(errorMessage);
      toast({
        title: "Error",
        description: `Failed to get suggestions: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="optimization-tool" className="py-16 md:py-24 bg-background animate-in fade-in duration-500 delay-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Optimize Your Landing Page with <span className="text-primary">AI</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Enter your current landing page content and let our AI provide actionable suggestions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Your Current Content</CardTitle>
              <CardDescription>Fill in the details of your existing landing page.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="targetAudience" className="font-medium">Target Audience</Label>
                  <Input id="targetAudience" {...form.register('targetAudience')} placeholder="e.g., Small business owners, tech enthusiasts" className="mt-1"/>
                  {form.formState.errors.targetAudience && <p className="text-sm text-destructive mt-1">{form.formState.errors.targetAudience.message}</p>}
                </div>
                <div>
                  <Label htmlFor="headline" className="font-medium">Current Headline</Label>
                  <Input id="headline" {...form.register('headline')} placeholder="e.g., The Best Tool for X" className="mt-1"/>
                  {form.formState.errors.headline && <p className="text-sm text-destructive mt-1">{form.formState.errors.headline.message}</p>}
                </div>
                <div>
                  <Label htmlFor="valueProposition" className="font-medium">Current Value Proposition</Label>
                  <Textarea id="valueProposition" {...form.register('valueProposition')} placeholder="Describe the main benefit you offer" className="mt-1"/>
                  {form.formState.errors.valueProposition && <p className="text-sm text-destructive mt-1">{form.formState.errors.valueProposition.message}</p>}
                </div>
                <div>
                  <Label htmlFor="callToAction" className="font-medium">Current Call to Action (Button Text)</Label>
                  <Input id="callToAction" {...form.register('callToAction')} placeholder="e.g., Sign Up Free, Learn More" className="mt-1"/>
                  {form.formState.errors.callToAction && <p className="text-sm text-destructive mt-1">{form.formState.errors.callToAction.message}</p>}
                </div>
                <div>
                  <Label htmlFor="featuresOverview" className="font-medium">Features Overview</Label>
                  <Textarea id="featuresOverview" {...form.register('featuresOverview')} placeholder="Briefly list or describe key features" className="mt-1"/>
                  {form.formState.errors.featuresOverview && <p className="text-sm text-destructive mt-1">{form.formState.errors.featuresOverview.message}</p>}
                </div>
                 <div>
                  <Label htmlFor="socialProof" className="font-medium">Social Proof / Testimonials</Label>
                  <Textarea id="socialProof" {...form.register('socialProof')} placeholder="Include any existing customer quotes or trust signals" className="mt-1"/>
                  {form.formState.errors.socialProof && <p className="text-sm text-destructive mt-1">{form.formState.errors.socialProof.message}</p>}
                </div>
                <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Get AI Suggestions
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">AI-Powered Suggestions</CardTitle>
                <CardDescription>Our AI's recommendations to boost your conversions.</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin mb-2" />
                    <p>Generating suggestions...</p>
                  </div>
                )}
                {error && (
                   <Alert variant="destructive">
                     <AlertTitle>Error</AlertTitle>
                     <AlertDescription>{error}</AlertDescription>
                   </Alert>
                )}
                {aiResult && !isLoading && (
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-foreground">Optimized Headline:</h4>
                      <p className="text-muted-foreground bg-secondary/50 p-3 rounded-md">{aiResult.optimizedHeadline}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Optimized Value Proposition:</h4>
                      <p className="text-muted-foreground bg-secondary/50 p-3 rounded-md whitespace-pre-line">{aiResult.optimizedValueProposition}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Optimized Call to Action:</h4>
                      <p className="text-muted-foreground bg-secondary/50 p-3 rounded-md">{aiResult.optimizedCallToAction}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Additional Suggestions:</h4>
                      <p className="text-muted-foreground bg-secondary/50 p-3 rounded-md whitespace-pre-line">{aiResult.suggestions}</p>
                    </div>
                  </div>
                )}
                {!aiResult && !isLoading && !error && (
                  <p className="text-center text-muted-foreground py-10">Fill out the form and click "Get AI Suggestions" to see results here.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
