
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardList, Plane, Umbrella, HeartHandshake, ShieldCheck } from 'lucide-react';

const otherServicesList = [
  {
    icon: <ClipboardList className="h-10 w-10 text-primary" />,
    title: 'Apoyos Administrativos Adicionales',
    description: 'Afiliación ARL, Caja Compensación, Elaboración Planillas pago seguridad social.',
  },
  {
    icon: <Plane className="h-10 w-10 text-primary" />,
    title: 'Turismo y Recreación',
    description: 'Planes turísticos nacionales e internacionales, días de sol e integraciones empresariales.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: 'Afiliación a Medicina Prepagada',
    description: 'Acceso a una variedad de prestadores a nivel país para medicina prepagada.',
  },
];

export function OtherServicesSection() {
  return (
    <section id="other-services" className="py-16 md:py-24 bg-secondary/30 animate-in fade-in duration-500 delay-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Otras Ofertas de <span className="text-primary">Servicios</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Soluciones integrales para tus necesidades administrativas, de recreación y salud complementaria.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {otherServicesList.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
              <CardHeader className="items-center">
                {service.icon}
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <CardTitle className="text-xl font-headline mb-2 h-16 flex items-center justify-center">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.description}</p>
                 <p className="text-xs text-muted-foreground mt-3">Por favor contáctame para agendar acompañamiento.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
