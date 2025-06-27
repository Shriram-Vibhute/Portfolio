import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="w-full max-w-[65%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} MirrorFolio. All rights reserved.
        </p>
        <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
      </div>
    </footer>
  );
}
