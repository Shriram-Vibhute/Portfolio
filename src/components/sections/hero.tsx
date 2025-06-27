import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Phone, Globe } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="w-full py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-[65%] mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 items-center gap-8 lg:gap-12">
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Debarghya Das
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Experienced software engineer with a strong background in computer science and a focus on machine learning, web development, and open-source contributions. Adept at leading teams and delivering high-impact projects.
            </p>
            <p className="text-sm text-muted-foreground">Ithaca, NY</p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Website">
                  <Globe className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:example@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="tel:+1234567890" aria-label="Phone">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://placehold.co/150x150.png"
              alt="Debarghya Das"
              data-ai-hint="anime character"
              width={150}
              height={150}
              className="rounded-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
