
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PhoneOutgoing } from 'lucide-react';
import profilePic from '@/public/profile.jpg';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30 animate-in fade-in duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-headline font-extrabold tracking-tight text-foreground">
            EL CENTRO ES MI LABOR COMO <span className="text-primary">GESTOR NUEVA EPS</span> AGENTE EXTERNO.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Ovier H. Avila López
            <br />
            <span className="font-semibold text-foreground/80">Gestor Integral Nueva EPS Externo (Contratista).</span>
            <br />
            Comprometido con brindarte el mejor acompañamiento en tus trámites de salud.
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105"
            onClick={scrollToContact}
          >
            Contáctame Ahora <PhoneOutgoing className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl group">
           <Image
            src={profilePic}
            alt="Profesional de servicios de salud"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="professional consultant"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
}
