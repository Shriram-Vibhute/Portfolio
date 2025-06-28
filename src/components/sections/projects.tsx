import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Spotify - Hybrid Recommendation System",
    description:
      "A machine learning model to predict stock market trends with high accuracy.",
    image: "https://placehold.co/600x400.png",
    tags: ["Machine Learning", "Python", "TensorFlow"],
    aiHint: "abstract data",
  },
  {
    title: "Project Beta",
    description:
      "A scalable web application for real-time data visualization and analysis.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Node.js", "D3.js"],
    aiHint: "dashboard chart",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-8">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.aiHint}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover"
                  />
                  <CardTitle className="pt-4">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
