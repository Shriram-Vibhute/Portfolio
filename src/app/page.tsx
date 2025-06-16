
import HeroSection from '@/components/hero-section';
import FloatingDockDemo from "@/components/floating-dock-demo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroSection
        badgeText="Full Stack Developer"
        greeting="Hello, I'm"
        namePart1="Shriram"
        namePart2="Vibhute"
        namePart1Color="text-pink-500"
        namePart2Color="text-yellow-500"
        availabilityText="Available for new projects"
        introParagraph="From uncovering insights with Data Science and Machine Learning to building intelligent and scaleble applications with Deep Learning and MLOps."
        profileImageUrl="https://placehold.co/288x288.png"
        profileImageAlt="Shriram Vibhute Profile Picture"
      />
      <FloatingDockDemo />
    </main>
  );
}
