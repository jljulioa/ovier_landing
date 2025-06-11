import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "LandingSpark revolutionized how we approach A/B testing. The AI suggestions are spot on and have significantly boosted our conversion rates!",
    name: 'Sarah L.',
    title: 'Marketing Manager, TechSolutions Inc.',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'SL',
    aiHint: 'professional woman portrait'
  },
  {
    quote: "I was skeptical about AI for copywriting, but LandingSpark proved me wrong. It's like having an expert consultant on demand.",
    name: 'Mike P.',
    title: 'Founder, StartupBoost',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'MP',
    aiHint: 'startup founder casual'
  },
  {
    quote: "The insights provided are invaluable. We've seen a 25% increase in leads since implementing LandingSpark's recommendations.",
    name: 'Jessica W.',
    title: 'E-commerce Specialist, ShopFast',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'JW',
    aiHint: 'ecommerce professional'
  },
];

export function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 animate-in fade-in duration-500 delay-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Trusted by Innovators
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our users are saying about LandingSpark.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg flex flex-col">
              <CardContent className="pt-6 flex-grow flex flex-col">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
