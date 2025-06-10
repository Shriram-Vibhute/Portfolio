
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import EducationSection from "@/components/sections/education-section";
import CertificationSection from "@/components/sections/certification-section";
import ContactSection from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationSection />
        <ContactSection />
      </main>
    </>
  );
}
