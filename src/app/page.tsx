
import HeroSection from '@/components/hero-section';
import FloatingDockDemo from "@/components/floating-dock-demo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-16">
      <HeroSection
        badgeText="Machine Learning Engineer"
        greeting="Hello, I'm"
        namePart1="Shriram"
        namePart2="Vibhute"
        availabilityText="Available for new projects in below technologies"
        introParagraph="From uncovering insights with Data Science and Machine Learning to building intelligent and scaleble applications with Deep Learning and MLOps."
        profileImageUrl="https://placehold.co/400x400.png"
        profileImageAlt="Shriram Vibhute profile photo"
      />
      <FloatingDockDemo />
    </main>
  );
}
