
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MessageSquare, MapPin, Globe, CreditCard, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact-section" className="py-16 md:py-24 bg-background animate-in fade-in duration-500 delay-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Información de Contacto y <span className="text-primary">Redes Sociales</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estoy aquí para ayudarte. Contáctame para agendar una cita y recibir acompañamiento personalizado.
          </p>
          <p className="mt-2 text-md text-muted-foreground">
            Atención presencial en la Zona de Urabá y virtual en toda Colombia.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-center">Ovier H. Avila López</CardTitle>
            <CardDescription className="text-center">Gestor Integral Nueva EPS Externo (Contratista)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground flex items-center"><Phone className="mr-2 h-5 w-5 text-primary" />Contacto Directo</h3>
                <p className="text-muted-foreground">Celular y WhatsApp: <a href="tel:+573148508086" className="text-primary hover:underline">314 850 8086</a></p>
                <p className="text-muted-foreground">Correo: <a href="mailto:ovieravila@gmail.com" className="text-primary hover:underline">ovieravila@gmail.com</a></p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground flex items-center"><MapPin className="mr-2 h-5 w-5 text-primary" />Ubicación y Alcance</h3>
                <p className="text-muted-foreground">Ubicación: Apartadó – Antioquia</p>
                <p className="text-muted-foreground">Campo de Acción: Toda Colombia (Virtual)</p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center"><Globe className="mr-2 h-5 w-5 text-primary" />Redes Sociales</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://twitter.com/OvierHAL" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-4 w-4" /> X (Twitter)
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://instagram.com/ovier_hal" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" /> Instagram
                  </a>
                </Button>
                 <Button variant="outline" size="sm" asChild>
                  <a href="https://tiktok.com/@ovierhal" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4" /> TikTok
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.facebook.com/share/18zi2DztaQ/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="mr-2 h-4 w-4" /> Facebook
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/ovier-hernan-avila-lópez-91201452" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            
            <Separator />

            <div>
              <h3 className="font-semibold text-lg text-foreground flex items-center"><CreditCard className="mr-2 h-5 w-5 text-primary" />Enlace de Pagos</h3>
              <p className="text-muted-foreground">Transferencias a través de la llave: <span className="font-semibold text-foreground/90">@OHA476</span></p>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
