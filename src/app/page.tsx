
import HeroSection from "@/components/sections/hero-section";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <HeroSection />
        <Separator className="my-0" />
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
