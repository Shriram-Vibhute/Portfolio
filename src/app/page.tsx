
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import EducationSection from "@/components/sections/education-section";
import CertificationSection from "@/components/sections/certification-section";

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationSection />
      </main>

      <footer className="py-8 bg-background text-muted-foreground border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="font-mono text-xs text-slate-500">
            Designed & Built by Darshan Bhuva
          </p>
          <p className="text-xs text-slate-600 mt-1">&copy; {currentYear} All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
