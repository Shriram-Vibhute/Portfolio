
import HeroSection from '@/components/hero-section';

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
        introParagraph="I'm a Full Stack web developer and Open Source Contributor, with a focus on JavaScript, React, and UI/UX design. Enthusiastic about Three.js, driven by a keen eye for design."
        profileImageUrl="https://placehold.co/288x288.png"
        profileImageAlt="Shriram Vibhute Profile Picture"
      />
    </main>
  );
}
