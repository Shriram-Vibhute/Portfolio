import HeroSection from '@/components/hero-section';
import FloatingDockDemo from '@/components/floating-dock-demo';

export default function Home() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', iconName: 'Github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', iconName: 'Linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', iconName: 'Twitter' },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <HeroSection
        name="Jamie Developer"
        title="Innovative Full-Stack Engineer & Creative Thinker"
        defaultIntro="Passionate about crafting elegant and impactful digital solutions. I thrive on turning complex challenges into user-friendly experiences with modern technologies."
        projectKeywords="React, Next.js, TypeScript, Node.js, AI Integration, UI/UX"
        socialLinks={socialLinks}
        contactLink="mailto:jamie.developer@example.com"
      />
      <FloatingDockDemo />
    </main>
  );
}
