
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/landing-spark/hero-section';
import { FeaturesSection } from '@/components/landing-spark/features-section';
import { OtherServicesSection } from '@/components/landing-spark/other-services-section';
import { ContactSection } from '@/components/landing-spark/contact-section';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <OtherServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
