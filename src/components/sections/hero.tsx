import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 md:px-6 text-center">
        <Image
          src="https://placehold.co/128x128.png"
          alt="Professional Portrait"
          data-ai-hint="professional portrait"
          width={128}
          height={128}
          className="rounded-full object-cover"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Jane Doe
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Software Engineer & Creative Technologist
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-4 w-4" /> Twitter
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
