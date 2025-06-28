import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="w-full py-8 mt-16">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 items-center gap-0">
          <div className="md:col-span-2 space-y-4">
            <div>
              <p className="text-lg text-custom border-b pb-2 mb-4">
                Machine Learning Engineer
              </p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                I'm Shriram 👋🏻
              </h1>
            </div>
            <p className="text-custom md:text-lg">
              From uncovering insights with Data Science to building intelligent and scalable applications with Machine Learning, Deep Learning and MLOps.
            </p>
            <p className="text-sm text-muted-foreground">Maharashtra, India</p>
            <div className="flex gap-4">
              <Button asChild className="bg-[#2f2f2f] hover:bg-[#2f2f2f]/90">
                <a href="https://drive.google.com/uc?export=download&id=18Tht4yotbYSNPVrTTXaHR1dzCbsOrvFO" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="mailto:shriram.vibhute08@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://drive.google.com/uc?export=view&id=1ya67wIF3eFrA3hlYwfj3D4VI4yFqSEPf"
              alt="Shriram"
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
