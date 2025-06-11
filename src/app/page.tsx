import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/landing-spark/hero-section';
import { FeaturesSection } from '@/components/landing-spark/features-section';
import { SocialProofSection } from '@/components/landing-spark/social-proof-section';
import { OptimizationTool } from '@/components/landing-spark/optimization-tool';

export default function LandingSparkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <SocialProofSection />
        <OptimizationTool />
      </main>
      <Footer />
    </div>
  );
}
