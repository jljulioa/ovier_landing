
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UsersRound, UserPlus, Repeat, BriefcaseBusiness, UserCheck, FileText } from 'lucide-react';

const epsServices = [
  {
    icon: <UserPlus className="h-10 w-10 text-primary" />,
    title: 'Afiliaciones Plan Básico (Nuevos/Independientes)',
    description: 'Para trabajadores nuevos o independientes, y reingresos.',
  },
  {
    icon: <UsersRound className="h-10 w-10 text-primary" />,
    title: 'Afiliaciones Plan Básico (Beneficiarios)',
    description: 'Reingresos de beneficiarios al Plan Básico de Salud Nueva EPS.',
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: 'Afiliaciones Plan Básico (Primera Vez)',
    description: 'Para trabajadores y/o beneficiarios que nunca han estado en el sistema de salud colombiano.',
  },
  {
    icon: <Repeat className="h-10 w-10 text-primary" />,
    title: 'Traslados a Nueva EPS (Trabajadores/Independientes)',
    description: 'Desde otras EPS o Regímenes de Excepción.',
  },
  {
    icon: <Repeat className="h-10 w-10 text-primary" />,
    title: 'Traslados a Nueva EPS (Beneficiarios)',
    description: 'Beneficiarios de otras EPS y Regímenes de Excepción.',
  },
  {
    icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
    title: 'Afiliación Empresas Nuevas',
    description: 'Gestión de afiliación para empresas nuevas a Nueva EPS.',
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Apoyos Administrativos GRATIS',
    description: 'Asesoría y soporte en casos relacionados con Nueva EPS.',
  },
];

export function FeaturesSection() {
  return (
    <section id="eps-services" className="py-16 md:py-24 animate-in fade-in duration-500 delay-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Servicios como Gestor Integral <span className="text-primary">Nueva EPS</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Afiliaciones, traslados, y apoyo administrativo para tus necesidades con Nueva EPS.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {epsServices.map((feature, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
              <CardHeader className="items-center">
                {feature.icon}
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <CardTitle className="text-xl font-headline mb-2 h-16 flex items-center justify-center">{feature.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
