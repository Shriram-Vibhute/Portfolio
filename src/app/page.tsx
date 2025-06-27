import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { FadeIn } from "@/components/fade-in";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh">
      <main className="flex-grow">
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Experience />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
