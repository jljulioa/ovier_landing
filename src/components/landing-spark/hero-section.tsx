"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30 animate-in fade-in duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold tracking-tight text-foreground">
            Turn Clicks into Customers,{' '}
            <span className="text-primary">Smarter.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            LandingSpark uses AI to analyze and optimize your landing pages,
            skyrocketing your conversion rates. Get expert suggestions in seconds.
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105"
            onClick={() => {
              const element = document.getElementById('optimization-tool');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Optimize Your Page Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
           <Image
            src="https://placehold.co/600x400.png"
            alt="Landing page visual"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="digital marketing analytics"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
}
