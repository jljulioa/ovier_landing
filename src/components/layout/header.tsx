
import { Briefcase } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="py-4 shadow-sm sticky top-0 bg-background/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Briefcase className="h-7 w-7 text-primary" />
          <h1 className="text-xl md:text-2xl font-headline font-semibold text-foreground">
            Ovier H. Avila López
          </h1>
        </Link>
        <nav>
          {/* Future navigation items can go here */}
        </nav>
      </div>
    </header>
  );
}
