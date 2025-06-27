import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate and driven software engineer with a knack for
              creating elegant, efficient, and user-friendly digital
              experiences. With a strong foundation in modern web technologies,
              I'm on a mission to build applications that not only function
              flawlessly but also inspire and delight users.
            </p>
          </div>
          <div className="w-full max-w-2xl">
            <h3 className="text-2xl font-bold tracking-tighter mb-4">Skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">GraphQL</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Firebase</Badge>
              <Badge variant="secondary">Docker</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
