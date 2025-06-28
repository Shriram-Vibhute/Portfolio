import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { FadeIn } from "@/components/fade-in";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh">
      <main className="flex-grow bg-white">
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Experience />
        </FadeIn>
        <FadeIn>
          <Education />
        </FadeIn>
      </main>
    </div>
  );
}
