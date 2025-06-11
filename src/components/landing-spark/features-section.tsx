import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Target, LayoutGrid, Brain } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Instant Optimization',
    description: 'Get AI-powered suggestions for your landing page copy and design in real-time.',
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Audience Focused',
    description: 'Tailor your message effectively by providing your target audience insights to our AI.',
  },
  {
    icon: <LayoutGrid className="h-10 w-10 text-primary" />,
    title: 'Comprehensive Analysis',
    description: 'Improve headlines, value propositions, CTAs, feature descriptions, and social proof.',
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: 'Smart Suggestions',
    description: 'Leverage cutting-edge AI to uncover hidden opportunities for conversion boosts.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 animate-in fade-in duration-500 delay-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Why Choose <span className="text-primary">LandingSpark</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Unlock the full potential of your landing pages with intelligent optimization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center">
                {feature.icon}
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-xl font-headline mb-2">{feature.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
