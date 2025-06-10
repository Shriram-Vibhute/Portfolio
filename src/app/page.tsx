import AboutSection from "@/components/sections/about-section";
import HeroSection from "@/components/sections/hero-section";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <>
      <header className="py-4 bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="font-headline text-3xl font-bold text-primary">Sectionize</h1>
          {/* Future navigation links can go here */}
        </div>
      </header>

      <main className="min-h-screen bg-background text-foreground">
        <HeroSection />
        <Separator className="my-0" />
        <AboutSection />
      </main>

      <footer className="py-10 bg-muted text-muted-foreground border-t">
        <div className="container mx-auto px-6 text-center">
          <p className="font-headline text-xl text-primary mb-2">Sectionize</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Sectionize. All rights reserved.</p>
          <p className="text-xs mt-2">Elegantly crafted sections for modern websites.</p>
        </div>
      </footer>
    </>
  );
}
