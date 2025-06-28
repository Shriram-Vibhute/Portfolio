import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full py-8">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">
            Get In Touch
          </h2>
          <p className="text-custom md:text-lg/relaxed max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of an ambitious vision.
          </p>
          <Button asChild>
            <a href="mailto:example@example.com">
              <Mail className="mr-2 h-4 w-4" /> Say Hello
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
